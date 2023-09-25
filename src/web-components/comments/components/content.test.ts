import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';
import sleep from '../../../common/utils/sleep';
import '.';
import { Annotation } from '../../../components/comments/types';

import { AnnotationFilter } from './types';

let element: HTMLElement;

const createElement = async (annotations = [MOCK_ANNOTATION], filter = AnnotationFilter.ALL) => {
  element = document.createElement('superviz-comments-content');
  element.setAttribute('annotations', JSON.stringify(annotations));
  element.setAttribute('annotationFilter', filter);
  document.body.appendChild(element);
  await element['updateComplete'];
  await sleep(100);
  return element;
};

describe('CommentsContent', () => {
  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the component', async () => {
    element = await createElement();
    expect(element).toBeTruthy();
  });

  test('should select annotation', async () => {
    element = await createElement();

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

  test('should update filtered annotations', async () => {
    const annotations = [
      MOCK_ANNOTATION,
      {
        ...MOCK_ANNOTATION,
        resolved: true,
      },
    ];
    element = await createElement(annotations);

    await sleep();

    expect(element['annotationsFiltered']).toEqual(annotations);
    expect(element['annotationFilter']).toEqual(AnnotationFilter.ALL);

    element.setAttribute('annotationFilter', AnnotationFilter.RESOLVED);

    await sleep();

    expect(element['annotationsFiltered']).toEqual([annotations[1]]);
    expect(element['annotationFilter']).toEqual(AnnotationFilter.RESOLVED);
  });
});
