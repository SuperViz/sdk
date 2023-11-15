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
    color: MeetingColorsHex[1],
    id: '2',
    slotIndex: 1,
  },
  {
    name: 'John Doe',
    avatar: {
      imageUrl: '',
      model3DUrl: '',
    },
    color: MeetingColorsHex[2],
    id: '3',
    slotIndex: 2,
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
    expect(participants.getAttribute('style')).toBe('top: 20px; right: 40px;');
  });

  test('should update position style', async () => {
    const participants = element?.shadowRoot?.querySelector(
      '.superviz-who-is-online',
    ) as HTMLElement;
    element['position'] = 'top: 20px; left: 40px;';

    await sleep();

    expect(participants.getAttribute('style')).toBe('top: 20px; left: 40px;');
  });

  test('should not update position style if does not find participants', async () => {
    const participants = element?.shadowRoot?.querySelector(
      '.superviz-who-is-online',
    ) as HTMLElement;
    participants.classList.remove('superviz-who-is-online');

    element['position'] = 'top: 20px; left: 40px;';

    await sleep();
    expect(participants.classList.contains('superviz-who-is-online')).toBeFalsy();
    expect(participants.getAttribute('style')).toBe('top: 20px; right: 40px;');
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

  test('should give a black color to the letter when the slotIndex is not in the textColorValues', async () => {
    element['updateParticipants'](MOCK_PARTICIPANTS);
    await sleep();

    const letter = element?.shadowRoot?.querySelector('.superviz-who-is-online__avatar');

    const backgroundColor = MeetingColorsHex[MOCK_PARTICIPANTS[0].slotIndex];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #000000`,
    );
  });

  test('should give a white color to the letter when the slotIndex is in the textColorValues', async () => {
    const participant = {
      ...MOCK_PARTICIPANTS[0],
      slotIndex: 2,
      color: MeetingColorsHex[2],
    };

    element['updateParticipants']([participant]);
    await sleep();

    const letter = element?.shadowRoot?.querySelector('.superviz-who-is-online__avatar');

    const backgroundColor = MeetingColorsHex[participant.slotIndex];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #FFFFFF`,
    );
  });

  test('should toggle open property', () => {
    expect(element['open']).toBeFalsy();

    element['toggleOpen']();
    expect(element['open']).toBeTruthy();

    element['toggleOpen']();
    expect(element['open']).toBeFalsy();
  });

  test('should update open property when clicking outside', async () => {
    const event = new CustomEvent('clickout', {
      detail: {
        open: false,
      },
    });

    element['updateParticipants']([...MOCK_PARTICIPANTS, ...MOCK_PARTICIPANTS]);

    await sleep();
    const dropdown = element.shadowRoot?.querySelector(
      'superviz-who-is-online-dropdown',
    ) as HTMLElement;

    dropdown.dispatchEvent(event);
    expect(element['open']).toBeFalsy();
  });

  test('should correctly display either name letter or image', () => {
    const letter = element['getAvatar'](MOCK_PARTICIPANTS[0]);
    expect(letter.strings[0]).not.toContain('img');

    const participant = {
      ...MOCK_PARTICIPANTS[0],
      avatar: {
        imageUrl: 'https://link.com/image',
        model3DUrl: '',
      },
    };

    const avatar = element['getAvatar'](participant);
    expect(avatar.strings[0]).toContain('img');
  });

  // @TODO: create tests in V2 (dropdownOptionsHandler does not have an implementation yet)
  test('', async () => {
    const event = new CustomEvent('selected');

    element['updateParticipants']([...MOCK_PARTICIPANTS, ...MOCK_PARTICIPANTS]);

    await sleep();
    const dropdown = element.shadowRoot?.querySelector(
      'superviz-who-is-online-dropdown',
    ) as HTMLElement;

    dropdown.dispatchEvent(event);
  });
});
