import '.';
import sleep from '../../common/utils/sleep';

let element: HTMLElement;

describe('Connection', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-connection');
    document.body.appendChild(element);
    await sleep();
  });

  test('should render a div with class "superviz-connection"', () => {
    const div = element?.shadowRoot?.querySelector('.superviz-connection');
    expect(div).not.toBeUndefined();
  });

  test('should have default positioning style', () => {
    const div = element?.shadowRoot?.querySelector('.superviz-connection') as HTMLElement;
    expect(div.getAttribute('style')).toBe('left: 20px; top: 20px;');
  });

  test('should update position style', (done) => {
    const div = element?.shadowRoot?.querySelector('.superviz-connection') as HTMLElement;
    element['position'] = 'right: 20px; top: 20px;';

    setTimeout(() => {
      expect(div.getAttribute('style')).toBe('right: 20px; top: 20px;');
      done();
    }, 200);
  });

  test('should not update position style if does not find div', (done) => {
    const div = element?.shadowRoot?.querySelector('.superviz-connection') as HTMLElement;
    div.classList.remove('superviz-connection');

    element['position'] = 'right: 20px; top: 20px;';

    setTimeout(() => {
      expect(div.classList.contains('superviz-connection')).toBeFalsy();
      expect(div.getAttribute('style')).toBe('left: 20px; top: 20px;');
      done();
    }, 200);
  });
});
