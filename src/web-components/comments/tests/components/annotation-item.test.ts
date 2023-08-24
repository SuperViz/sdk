import { MOCK_ANNOTATION } from '../../../../../__mocks__/comments.mock';
import sleep from '../../../../common/utils/sleep';
import { Annotation } from '../../../../components/comments/types';
import '../../components';

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

  test('resolves the annotation when the comment is unresolved', async () => {
    element = await createElement(MOCK_ANNOTATION);
    const commentItem = element.shadowRoot!.querySelector('superviz-comments-comment-item');

    commentItem!.dispatchEvent(new CustomEvent('resolve-annotation', { detail: { resolved: 'true' } }));

    await sleep();

    expect(element['options']['resolved']).toBe('true');
  });

  test('resolves the annotation when the comment is resolved', async () => {
    element = await createElement({
      ...MOCK_ANNOTATION,
      resolved: true,
    });
    expect(element['options']['resolved']).toBe(true);
    const commentItem = element.shadowRoot!.querySelector('superviz-comments-comment-item');

    commentItem!.dispatchEvent(new CustomEvent('resolve-annotation', { detail: { resolved: 'false' } }));

    await sleep();

    expect(element['options']['resolved']).toBe('false');
  });
});
