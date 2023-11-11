import '.';
import sleep from '../../common/utils/sleep';

import { Participant } from './components/types';

let element: HTMLElement;

const MOCK_PARTICIPANTS: Participant[] = [
  {
    name: 'name 1',
    color: '#000',
  },
  {
    name: 'name 2',
    color: '#000',
  },
  {
    name: 'name 3',
    color: '#000',
  },
  {
    name: 'name 4',
    color: '#000',
  },
  {
    name: 'name 5',
    color: '#000',
  },
];

describe('Who Is Online', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-who-is-online');
    document.body.appendChild(element);
    await sleep();
  });

  test('should render a participants with class "superviz-who-is-online"', () => {
    const participants = element?.shadowRoot?.querySelector('.superviz-who-is-online');
    expect(participants).not.toBeFalsy();
  });

  test('should have default positioning style', () => {
    const participants = element?.shadowRoot?.querySelector(
      '.superviz-who-is-online',
    ) as HTMLElement;
    expect(participants.getAttribute('style')).toBe('top: 20px; right: 20px;');
  });

  test('should update position style', async () => {
    const participants = element?.shadowRoot?.querySelector(
      '.superviz-who-is-online',
    ) as HTMLElement;
    element['position'] = 'top: 20px; left: 20px;';

    await sleep();

    expect(participants.getAttribute('style')).toBe('top: 20px; left: 20px;');
  });

  test('should not update position style if does not find participants', async () => {
    const participants = element?.shadowRoot?.querySelector(
      '.superviz-who-is-online',
    ) as HTMLElement;
    participants.classList.remove('superviz-who-is-online');

    element['position'] = 'top: 20px; left: 20px;';

    await sleep();
    expect(participants.classList.contains('superviz-who-is-online')).toBeFalsy();
    expect(participants.getAttribute('style')).toBe('top: 20px; right: 20px;');
  });

  test('should update participants list', () => {});
});
