import '..';
import sleep from '../../../common/utils/sleep';

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
    const app = renderedElement.shadowRoot?.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));
    renderedElement.removeAttribute('open');

    expect(renderedElement.hasAttribute('open')).toBeFalsy();
    expect(app?.classList.contains('container-close')).toBeTruthy();
  });

  test('should open superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot?.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));

    await sleep();

    expect(renderedElement.hasAttribute('open')).toBeTruthy();
    expect(app?.classList.contains('container')).toBe(true);
  });

  test('should add annotations', async () => {
    const annotation = {
      uuid: 'any_uuid',
      position: 'any_position',
      resolved: false,
      comments: [
        {
          uuid: 'any_uuid',
          username: 'any_username',
          avatar: 'any_avatar',
          text: 'any_text',
          createdAt: new Date().toISOString(),
        },
      ],
    };

    element['addAnnotation']([annotation]);

    expect(element['annotations']).toEqual([annotation]);
  });

  test('should toggle superviz comments', async () => {
    const isOpen = element['open'];
    element['toggle']();

    await sleep();

    expect(element['open']).toEqual(!isOpen);
  });
});
