import '.';
import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import sleep from '../../common/utils/sleep';
import { Participant } from '../../components/who-is-online/types';

let element: HTMLElement;

const MOCK_PARTICIPANTS: Participant[] = [
  {
    name: 'John Zero',
    avatar: {
      imageUrl: '',
      model3DUrl: '',
    },
    color: MeetingColorsHex[0],
    id: '1',
    slotIndex: 0,
  },
  {
    name: 'John Uno',
    avatar: {
      imageUrl: '',
      model3DUrl: '',
    },
    color: MeetingColorsHex[0],
    id: '1',
    slotIndex: 0,
  },
  {
    name: 'John Doe',
    avatar: {
      imageUrl: '',
      model3DUrl: '',
    },
    color: MeetingColorsHex[0],
    id: '1',
    slotIndex: 0,
  },
];

describe('Who Is Online', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-who-is-online');
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    element.remove();
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

  test('should update participants list', async () => {
    let participants = element?.shadowRoot?.querySelectorAll(
      '.superviz-who-is-online__participant',
    );

    expect(participants?.length).toBe(0);

    element['updateParticipants'](MOCK_PARTICIPANTS);
    await sleep();

    participants = element.shadowRoot?.querySelectorAll('.superviz-who-is-online__participant');

    expect(participants?.length).toBe(3);

    element['updateParticipants'](MOCK_PARTICIPANTS.slice(0, 2));
    await sleep();

    participants = element.shadowRoot?.querySelectorAll('.superviz-who-is-online__participant');

    expect(participants?.length).toBe(2);
  });

  test('should render excess participants dropdown icon', async () => {
    element['updateParticipants'](MOCK_PARTICIPANTS);
    await sleep();

    let extraParticipants = element?.shadowRoot?.querySelector('.superviz-who-is-online__excess');

    expect(extraParticipants).toBeFalsy();

    element['updateParticipants']([...MOCK_PARTICIPANTS, ...MOCK_PARTICIPANTS]);
    await sleep();

    extraParticipants = element?.shadowRoot?.querySelector('.superviz-who-is-online__excess');

    expect(extraParticipants).toBeTruthy();
  });
});
