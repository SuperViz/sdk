import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';
import sleep from '../../../common/utils/sleep';
import { Annotation } from '../../../components/comments/types';
import '.';

let element: HTMLElement;

const createElement = async (annotation: Annotation) => {
  const element = document.createElement('superviz-comments-annotation-item');
  element.setAttribute('annotation', JSON.stringify(annotation));
  document.body.appendChild(element);
  await sleep();
  return element;
};

describe('CommentsAnnotationItem', () => {
  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the annotation', async () => {
    element = await createElement(MOCK_ANNOTATION);

    expect(element).toBeDefined();
  });

  test('expands the comments when the annotation is selected', async () => {
    element = await createElement(MOCK_ANNOTATION);
    const annotationItem = element.shadowRoot!.querySelector('.annotation-item') as HTMLElement;
    const commentsContainer = element.shadowRoot!.querySelector('.comments-container') as HTMLElement;

    expect(annotationItem.classList.contains('annotation-item--selected')).toBe(false);
    expect(commentsContainer.classList.contains('hidden')).toBe(true);
    expect(commentsContainer.classList.contains('comment-item--expand')).toBe(false);

    annotationItem!.addEventListener('select-annotation', () => {
      element.setAttribute('selected', MOCK_ANNOTATION.uuid);
    });

    annotationItem.click();

    annotationItem!.dispatchEvent(new CustomEvent('select-annotation', { detail: { resolved: 'true' } }));

    await sleep();

    const expectedAnnotation = element.shadowRoot!.querySelector('.annotation-item') as HTMLElement;
    const expectedCommentsContainer = element.shadowRoot!.querySelector('.comments-container') as HTMLElement;

    expect(expectedAnnotation.classList.contains('annotation-item--selected')).toBe(true);
    expect(expectedCommentsContainer.classList.contains('comment-item--expand')).toBe(true);
    expect(expectedCommentsContainer.classList.contains('hidden')).toBe(false);
  });

  test('should create a new comment in annotation', async () => {
    element = await createElement(MOCK_ANNOTATION);
    element['dispatchEvent'] = jest.fn();
    const commentInput = element.shadowRoot!.querySelector('superviz-comments-comment-input') as HTMLElement;

    commentInput!.dispatchEvent(new CustomEvent('create-comment', {
      detail: {
        text: 'new comment',
      },
    }));

    await sleep();

    expect(element['dispatchEvent']).toHaveBeenCalledWith(
      new CustomEvent('create-comment', {
        detail: {
          text: 'new comment',
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );
  });

  test('should resolve annotation', async () => {
    element = await createElement(MOCK_ANNOTATION);
    const commentItem = element.shadowRoot!.querySelector('superviz-comments-comment-item') as HTMLElement;

    commentItem!.dispatchEvent(new CustomEvent('resolve-annotation', { detail: { resolved: true } }));

    await sleep();

    expect(element['resolved']).toBe(true);
  });

  test('when the annotation is resolved, the comment is hidden', async () => {
    element = await createElement({
      ...MOCK_ANNOTATION,
      resolved: true,
    });

    const annotationHidden = element!.shadowRoot!.querySelector('.hidden');

    expect(annotationHidden).toBeDefined();
  });
});
