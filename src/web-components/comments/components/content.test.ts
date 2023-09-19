import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';
import sleep from '../../../common/utils/sleep';
import '.';

let element: HTMLElement;

describe('CommentsContent', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments-content');
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the component', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-content')[0];
    expect(renderedElement).toBeTruthy();
  });

  test('should select annotation', async () => {
    element.setAttribute('annotations', JSON.stringify([
      MOCK_ANNOTATION,
    ]));

    await sleep();

    const annotationItem = element.shadowRoot!.querySelectorAll('superviz-comments-annotation-item')[0];

    annotationItem?.dispatchEvent(new CustomEvent('select-annotation', {
      detail: {
        uuid: 'any_uuid',
      },
    }));

    await sleep();

    expect(annotationItem?.getAttribute('selected')).toBe('any_uuid');
    expect(element['selectedAnnotation']).toBe('any_uuid');
  });
});
