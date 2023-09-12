import { DateTime } from 'luxon';

import sleep from '../../../common/utils/sleep';

import '.';
import { CommentDropdownOptions, CommentMode } from './types';

const element = document.createElement('superviz-comments-comment-item');
document.body.appendChild(element);

element.setAttribute('avatar', 'https://example.com/avatar.png');
element.setAttribute('username', 'John Doe');
element.setAttribute('text', 'This is a comment');
element.setAttribute('createdAt', DateTime.now().toISO() as string);
element.setAttribute('options', JSON.stringify({ resolved: false, resolvable: true }));

describe('CommentsCommentItem', () => {
  test('renders the comment item with correct properties', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    const avatar = renderedElement.shadowRoot!.querySelector('.comment-item__avatar img') as HTMLImageElement;
    expect(avatar.src).toEqual('https://example.com/avatar.png');

    const username = renderedElement.shadowRoot!.querySelector('.comment-item__user .text-bold') as HTMLSpanElement;
    expect(username.textContent).toEqual('John Doe');

    const createdAt = renderedElement.shadowRoot!.querySelector('.comment-item__user .text-small') as HTMLSpanElement;
    expect(createdAt.textContent).toEqual(DateTime.now().toFormat('yyyy-dd-MM'));

    const text = renderedElement.shadowRoot!.querySelector('.comment-item__content .text-big') as HTMLSpanElement;
    expect(text.textContent).toEqual('This is a comment');
  });

  test('resolves the annotation when the comment is unresolved', async () => {
    await element['updateComplete'];

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];
    const resolveButton = renderedElement.shadowRoot!.querySelector('.comment-item__user > button') as HTMLButtonElement;

    element.dispatchEvent = jest.fn();

    resolveButton.click();

    await sleep();

    expect(element.dispatchEvent)
      .toHaveBeenCalledWith(
        new CustomEvent(
          'resolve-annotation',
          { detail: { resolved: true } },
        ),
      );
    expect(element['resolved']).toEqual(true);
  });

  test('should turn on editable mode', async () => {
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.EDIT }));

    await element['updateComplete'];

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    expect(renderedElement['mode']).toEqual(CommentMode.EDITABLE);
  });

  test('should turn off editable mode', async () => {
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: 'edit' }));

    await element['updateComplete'];

    const renderedElement = () => document.getElementsByTagName('superviz-comments-comment-item')[0];

    await element['updateComplete'];

    expect(renderedElement()['mode']).toEqual(CommentMode.EDITABLE);

    const editableComment = element.shadowRoot!.querySelector('superviz-comments-comment-input') as HTMLElement;
    editableComment.dispatchEvent(new CustomEvent('close-edit-mode'));

    await element['updateComplete'];

    expect(renderedElement()['mode']).toEqual('readonly');
  });

  test('should update comment', async () => {
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.EDIT }));

    await element['updateComplete'];

    const editableComment = element.shadowRoot!.querySelector('superviz-comments-comment-input') as HTMLElement;
    editableComment['dispatchEvent'](new CustomEvent('update-comment', { detail: {
      uuid: 'any_uuid',
      text: 'This is an updated comment',
    },
    }));

    expect(element['text']).toEqual('This is an updated comment');
    expect(element['mode']).toEqual('readonly');
  });

  test('should click in delete button', async () => {
    await element['updateComplete'];

    const dropdown = element.shadowRoot!.querySelector('superviz-dropdown') as HTMLElement;
    dropdown.dispatchEvent(new CustomEvent('selected', { detail: CommentDropdownOptions.DELETE }));

    await element['updateComplete'];

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    expect(renderedElement['deleteCommentModalOpen']).toBeTruthy();
  });

  test('should listen event close modal', async () => {
    await element['updateComplete'];

    const modal = element.shadowRoot!.querySelector('superviz-comments-delete-comments-modal') as HTMLElement;
    modal.dispatchEvent(new CustomEvent('close'));

    await element['updateComplete'];

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    expect(renderedElement['deleteCommentModalOpen']).toBeFalsy();
  });

  test('should listen event confirm delete', async () => {
    await element['updateComplete'];

    const modal = element.shadowRoot!.querySelector('superviz-comments-delete-comments-modal') as HTMLElement;
    modal.dispatchEvent(new CustomEvent('confirm'));

    await element['updateComplete'];

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    expect(renderedElement['deleteCommentModalOpen']).toBeFalsy();
    expect(renderedElement['primaryComment']).toBeFalsy();
  });
});
