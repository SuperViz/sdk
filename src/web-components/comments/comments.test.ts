import '.';
import sleep from '../../common/utils/sleep';

let element: HTMLElement;

describe('comments', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments');
    element.setAttribute('comments', JSON.stringify([]));
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the component', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    expect(renderedElement).toBeTruthy();
  });

  test('should close superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot!.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));
    renderedElement.removeAttribute('open');

    expect(renderedElement.hasAttribute('open')).toBeFalsy();
    expect(app?.classList.contains('container-close')).toBeTruthy();
  });

  test('should open superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot!.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));

    await sleep();

    expect(renderedElement.hasAttribute('open')).toBeTruthy();
    expect(app?.classList.contains('container')).toBe(true);
  });

  test('should toggle superviz comments', async () => {
    const isOpen = element['open'];
    element['toggle']();

    await sleep();

    expect(element['open']).toEqual(!isOpen);
  });

  test('should update annotations', async () => {
    const annotations = [{ id: '1', x: 0, y: 0, width: 0, height: 0, text: 'test' }];

    element['updateAnnotations'](annotations);

    await sleep();

    expect(element['annotations']).toEqual(annotations);
  });

  test('should set filter', async () => {
    const filter = 'test';
    const detail = { filter };

    element['setFilter']({ detail });

    await sleep();

    expect(element['annotationFilter']).toEqual(filter);
  });

  test('should show water mark', async () => {
    const waterMark = true;
    element['waterMarkStatus'](waterMark);

    await sleep();

    expect(element['waterMarkState']).toEqual(waterMark);
  });

  test('should not show water mark', async () => {
    const waterMark = false;
    element['waterMarkStatus'](waterMark);

    await sleep();

    expect(element['waterMarkState']).toEqual(waterMark);
  });
});
