import { DateTime } from 'luxon';

import sleep from '../../../common/utils/sleep';

import '.';
import { CommentDropdownOptions, CommentMode } from './types';

const DEFAULT_ELEMENT_OPTIONS = {
  avatar: 'https://example.com/avatar.png',
  username: 'John Doe',
  text: 'This is a comment',
  createdAt: DateTime.now().toISO() as string,
  resolved: false,
  resolvable: true,
  mode: CommentMode.READONLY,
};

let element: HTMLElement;

const createElement = async (options = DEFAULT_ELEMENT_OPTIONS) => {
  const element = document.createElement('superviz-comments-comment-item');

  Object.keys(options).forEach((key) => {
    if (key === 'resolved' || key === 'resolvable') {
      element.setAttributeNode(document.createAttribute(key));
      return;
    }

    element.setAttribute(key, options[key]);
  });

  document.body.appendChild(element);
  await sleep(100);
  return element;
};

describe('CommentsCommentItem', () => {
  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the comment item with correct properties', async () => {
    element = await createElement();

    const username = element.shadowRoot!.querySelector(
      '.comment-item__avatar img',
    ) as HTMLImageElement;
    expect(username.src).toEqual('https://example.com/avatar.png');

    const createdAt = element.shadowRoot!.querySelector(
      '.comment-item__user .text-small',
    ) as HTMLSpanElement;
    expect(createdAt.textContent).toEqual(DateTime.now().toFormat('yyyy-dd-MM'));

    const text = element.shadowRoot!.querySelector(
      '.comment-item__content .text-big',
    ) as HTMLSpanElement;
    expect(text.textContent).toEqual('This is a comment');
  });

  test('should render username first letter as avatar if there is no image', async () => {
    element = await createElement({
      ...DEFAULT_ELEMENT_OPTIONS,
      avatar: '',
    });

    const username = element.shadowRoot!.querySelector(
      '.comment-item__avatar .text',
    ) as HTMLSpanElement;
    expect(username.textContent).toEqual('J');
  });

  test('resolves the annotation when the comment is unresolved', async () => {
    element = await createElement({
      ...DEFAULT_ELEMENT_OPTIONS,
      resolvable: true,
      resolved: false,
    });

    await element['updateComplete'];

    const resolveButton = element.shadowRoot!.querySelector(
      '.comment-item__actions > button',
    ) as HTMLButtonElement;

    element.dispatchEvent = jest.fn();

    resolveButton.click();

    expect(element.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent('resolve-annotation', { detail: { resolved: true } }),
    );
  });

  test('should turn on editable mode', async () => {
    element = await createElement();
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.EDIT }));

    await element['updateComplete'];

    expect(element['mode']).toEqual(CommentMode.EDITABLE);
  });

  test('should turn off editable mode', async () => {
    element = await createElement();
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.EDIT }));

    await element['updateComplete'];

    expect(element['mode']).toEqual(CommentMode.EDITABLE);

    const editableComment = element.shadowRoot!.querySelector(
      'superviz-comments-comment-input',
    ) as HTMLElement;
    editableComment.dispatchEvent(new CustomEvent('close-edit-mode'));

    await element['updateComplete'];

    expect(element['mode']).toEqual(CommentMode.READONLY);
  });

  test('should update comment', async () => {
    element = await createElement();
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.EDIT }));

    await element['updateComplete'];

    const editableComment = element.shadowRoot!.querySelector(
      'superviz-comments-comment-input',
    ) as HTMLElement;
    editableComment['dispatchEvent'](
      new CustomEvent('update-comment', {
        detail: {
          uuid: 'any_uuid',
          text: 'This is an updated comment',
        },
      }),
    );

    expect(element['text']).toEqual('This is an updated comment');
    expect(element['mode']).toEqual(CommentMode.READONLY);
  });

  test('should click in delete button', async () => {
    element = await createElement();
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.DELETE }));

    await element['updateComplete'];

    expect(element['deleteCommentModalOpen']).toBeTruthy();
  });

  test('should listen event close modal', async () => {
    element = await createElement();
    await element['updateComplete'];

    const modal = element.shadowRoot!.querySelector(
      'superviz-comments-delete-comments-modal',
    ) as HTMLElement;
    modal.dispatchEvent(new CustomEvent('close'));

    await element['updateComplete'];

    expect(element['deleteCommentModalOpen']).toBeFalsy();
  });

  test('should listen event confirm delete', async () => {
    element = await createElement();
    await element['updateComplete'];

    const modal = element.shadowRoot!.querySelector(
      'superviz-comments-delete-comments-modal',
    ) as HTMLElement;
    modal.dispatchEvent(new CustomEvent('confirm'));

    await element['updateComplete'];

    expect(element['deleteCommentModalOpen']).toBeFalsy();
    expect(element['primaryComment']).toBeFalsy();
  });

  test('should emit event to delete annotation when are primaryComment', async () => {
    element = await createElement();
    element.setAttributeNode(document.createAttribute('primaryComment'));
    await element['updateComplete'];

    element.dispatchEvent = jest.fn();

    const modal = element.shadowRoot!.querySelector(
      'superviz-comments-delete-comments-modal',
    ) as HTMLElement;
    modal.dispatchEvent(new CustomEvent('confirm'));

    await element['updateComplete'];

    expect(element.dispatchEvent).toHaveBeenCalledWith(new CustomEvent('delete-annotation'));
  });

  test('when click in text should expand elipis when text is bigger than 120', async () => {
    element = await createElement({
      ...DEFAULT_ELEMENT_OPTIONS,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eget.',
    });

    await element['updateComplete'];

    const text = element.shadowRoot!.querySelector(
      '.comment-item__content #comment-text',
    ) as HTMLElement;
    text.click();

    await element['updateComplete'];

    expect(element['expandElipsis']).toBeTruthy();
  });

  test('when click in text should not expand elipis when text is smaller than 120', async () => {
    element = await createElement({
      ...DEFAULT_ELEMENT_OPTIONS,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });

    await element['updateComplete'];

    const text = element.shadowRoot!.querySelector(
      '.comment-item__content #comment-text',
    ) as HTMLElement;
    text.click();

    await element['updateComplete'];

    expect(element['expandElipsis']).toBeFalsy();
  });
});
