import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';
import sleep from '../../../common/utils/sleep';

import type { CommentsAnnotationPin } from './annotation-pin';
import { PinMode } from './types';

import '.';
import '../../icon';

function createAnnotationPin(type = PinMode.SHOW): CommentsAnnotationPin {
  const annotationPin = document.createElement(
    'superviz-comments-annotation-pin',
  ) as CommentsAnnotationPin;

  annotationPin.setAttribute('type', type);
  annotationPin.setAttribute('annotation', JSON.stringify(MOCK_ANNOTATION));

  return annotationPin;
}

/**
 * @TODO Add tests for the following:
 * - Clicking on the pin should open the annotation
 * - When user's avatar is not available, the first letter of the user's name should be displayed
 */

describe('annotation-pin', () => {
  afterEach(() => {
    const element = document.getElementsByTagName('superviz-comments-annotation-pin')[0];

    element?.remove();
  });

  test('renders the component with type SHOW', async () => {
    const element = createAnnotationPin();
    document.body.appendChild(element);

    await sleep();

    const renderedElement = document.getElementsByTagName('superviz-comments-annotation-pin')[0];

    expect(renderedElement).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin--active')).toBeFalsy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar--add')).toBeFalsy();
  });

  test('renders the component with type ADD', async () => {
    const element = createAnnotationPin(PinMode.ADD);
    document.body.appendChild(element);

    await sleep();

    const renderedElement = document.getElementsByTagName('superviz-comments-annotation-pin')[0];

    expect(renderedElement).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar--add')).toBeTruthy();
  });

  test('renders the component with type SHOW and active', async () => {
    const element = createAnnotationPin();
    element.setAttribute('active', 'true');
    document.body.appendChild(element);

    await sleep();

    const renderedElement = document.getElementsByTagName('superviz-comments-annotation-pin')[0];

    expect(renderedElement).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin--active')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar--add')).toBeFalsy();
  });

  test('renders the component with type ADD and active', async () => {
    const element = createAnnotationPin(PinMode.ADD);
    element.setAttribute('active', 'true');
    document.body.appendChild(element);

    await sleep();

    const renderedElement = document.getElementsByTagName('superviz-comments-annotation-pin')[0];

    expect(renderedElement).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin--active')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar')).toBeTruthy();
    expect(renderedElement.shadowRoot?.querySelector('.annotation-pin__avatar--add')).toBeTruthy();
  });
});
