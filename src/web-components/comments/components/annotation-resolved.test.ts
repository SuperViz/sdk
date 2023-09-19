import sleep from '../../../common/utils/sleep';
import '.';

let element: HTMLElement;

const createElement = async (resolved: boolean, timeToHide = 1000) => {
  const element = document.createElement('superviz-comments-annotation-resolved');

  if (resolved) {
    element.setAttributeNode(document.createAttribute('resolved'));
  }

  element.setAttribute('timeToHide', timeToHide.toString());

  document.body.appendChild(element);
  await sleep(100);
  return element;
};

describe('AnnotationResolved', () => {
  afterEach(() => {
    document.body.removeChild(element);
  });

  test('when resolved is true, should render', async () => {
    element = await createElement(true);

    expect(element['resolved']).toBe(true);

    await sleep(1);

    expect(element!.shadowRoot!.querySelector('annotation-resolved')).toBeDefined();
  });

  test('when resolved is false, should not render', async () => {
    element = await createElement(false);

    expect(element['resolved']).toBeUndefined();
    expect(element!.shadowRoot!.querySelector('annotation-resolved')).toBeNull();
  });

  test('when resolved is true and timeToHide is 0, should not render', async () => {
    element = await createElement(true);

    expect(element['resolved']).toBe(true);

    element['timeToHide'] = 0;

    await sleep(1);

    expect(element!.shadowRoot!.querySelector('annotation-resolved')).toBeNull();
  });

  test('when resolved is true and timeToHide is 10, should render', async () => {
    element = await createElement(true, 1000);
    expect(element['resolved']).toBe(true);
    expect(element!.shadowRoot?.querySelector('div.annotation-resolved')).not.toBeNull();
  });

  test('when elapsed time is 10 seconds, should not render', async () => {
    element = await createElement(true, 1000);
    expect(element['resolved']).toBe(true);

    await sleep(1001);

    expect(element!.shadowRoot?.querySelector('div.annotation-resolved')).toBeNull();
  });

  test('when click undone, cancel should be true and dispatch event undo-resolve', async () => {
    element = await createElement(true, 1000);
    expect(element['resolved']).toBe(true);
    expect(element!.shadowRoot?.querySelector('div.annotation-resolved')).not.toBeNull();
    element['emitEvent'] = jest.fn();

    const undoneBtn = element!.shadowRoot!.querySelector('#undone') as HTMLElement;
    undoneBtn.click();

    expect(element['isCanceled']).toBe(true);
    expect(element['emitEvent']).toHaveBeenCalledWith(
      'undo-resolve',
      { resolved: false },
      { bubbles: false, composed: false },
    );
  });
});
