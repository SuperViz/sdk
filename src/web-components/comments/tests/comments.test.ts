import '..';
import sleep from '../../../common/utils/sleep';

const element = document.createElement('superviz-comments');
element.setAttribute('comments', JSON.stringify([]));
document.body.appendChild(element);

describe('comments', () => {
  test('renders the component', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    expect(renderedElement).toBeTruthy();
  });

  test('should close superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot?.getElementById('app');

    renderedElement.removeAttribute('open');

    await sleep();

    expect(renderedElement.hasAttribute('open')).toBeFalsy();
    expect(app?.classList.contains('container-close')).toBeTruthy();
  });

  test('should open superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot?.getElementById('app');

    renderedElement.setAttributeNode(document.createAttribute('open'));

    await sleep();

    expect(renderedElement.hasAttribute('open')).toBeTruthy();
    expect(app?.classList.contains('container')).toBeTruthy();
  });
});
