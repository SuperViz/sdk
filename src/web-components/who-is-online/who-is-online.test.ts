import '.';
import sleep from '../../common/utils/sleep';

let element: HTMLElement;

describe('Who Is Online', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-who-is-online');
    document.body.appendChild(element);
    await sleep();
  });

  test('should render a div with class "superviz-who-is-online"', () => {
    const div = element?.shadowRoot?.querySelector('.superviz-who-is-online');
    expect(div).not.toBeUndefined();
  });

  test('should have default positioning style', () => {
    const div = element?.shadowRoot?.querySelector('.superviz-who-is-online') as HTMLElement;
    expect(div.getAttribute('style')).toBe('left: 20px; top: 20px;');
  });

  test('should update position style', (done) => {
    const div = element?.shadowRoot?.querySelector('.superviz-who-is-online') as HTMLElement;
    element['position'] = 'right: 20px; top: 20px;';

    setTimeout(() => {
      expect(div.getAttribute('style')).toBe('right: 20px; top: 20px;');
      done();
    }, 200);
  });

  test('should not update position style if does not find div', (done) => {
    const div = element?.shadowRoot?.querySelector('.superviz-who-is-online') as HTMLElement;
    div.classList.remove('superviz-who-is-online');

    element['position'] = 'right: 20px; top: 20px;';

    setTimeout(() => {
      expect(div.classList.contains('superviz-who-is-online')).toBeFalsy();
      expect(div.getAttribute('style')).toBe('left: 20px; top: 20px;');
      done();
    }, 200);
  });
});
