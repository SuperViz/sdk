import '.';
import { MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import sleep from '../../../common/utils/sleep';
import { Participant } from '../../../components/who-is-online/types';

interface elementProps {
  position: string;
  align: string;
  participants?: Participant[];
  label?: string;
  returnTo?: string;
  options?: any;
  name?: string;
  icons?: string[];
}

const mockParticipants: Participant[] = [
  {
    avatar: {
      imageUrl: '',
      model3DUrl: '',
    },
    color: MeetingColorsHex[0],
    id: '1',
    name: 'John Zero',
    slotIndex: 0,
  },
];

const createEl = ({
  position,
  align,
  label,
  returnTo,
  options,
  name,
  icons,
  participants,
}: elementProps): HTMLElement => {
  const element: HTMLElement = document.createElement('superviz-who-is-online-dropdown');

  label && element.setAttribute('label', label);
  returnTo && element.setAttribute('returnTo', returnTo);
  name && element.setAttribute('name', name);
  icons && element.setAttribute('icons', JSON.stringify(icons));
  !!participants?.length && element.setAttribute('participants', JSON.stringify(participants));

  element.setAttribute('position', position);
  element.setAttribute('align', align);

  const elementSlot = document.createElement('div');
  elementSlot.setAttribute('slot', 'dropdown');
  elementSlot.innerHTML = 'X';
  element.appendChild(elementSlot);
  document.body.appendChild(element);
  return element;
};

const element = () => {
  return document.querySelector('superviz-who-is-online-dropdown') as HTMLElement | null;
};

const dropdown = () => element()?.shadowRoot?.querySelector('.dropdown') as HTMLElement | null;
const dropdownContent = () => dropdown()?.querySelector('.dropdown-content') as HTMLElement | null;

const dropdownMenu = () => {
  return element()?.shadowRoot?.querySelector('.menu') as HTMLElement | null;
};

describe('dropdown', () => {
  afterEach(() => {
    document.body.querySelector('superviz-who-is-online-dropdown')?.remove();
  });

  test('should render dropdown', () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });
    const element = document.querySelector('superviz-who-is-online-dropdown');

    expect(element).not.toBeNull();
  });

  test('should open dropdown when click on it', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    dropdownContent()?.click();

    await sleep();
    const isOpen = dropdownMenu()?.classList.contains('menu-open');
    expect(isOpen).toBeTruthy();
  });

  test('should close dropdown when click on it', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();
    dropdownContent()?.click();

    document.addEventListener('click', jest.fn());

    await sleep();

    document.body.click();

    await sleep();

    const isOpen = dropdownMenu()?.classList.contains('menu-open');

    expect(isOpen).toBeFalsy();
    expect(element()?.['open']).toBeFalsy();
  });

  test('should open another dropdown when click on participant', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    dropdownContent()?.click();

    document.addEventListener('click', jest.fn());

    await sleep();

    document.body.click();

    await sleep();

    const isOpen = dropdownMenu()?.classList.contains('menu-open');

    expect(isOpen).toBeFalsy();
    expect(element()?.['open']).toBeFalsy();
  });

  test('should listen click event when click out', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    dropdownContent()?.click();

    await sleep();

    const spy = jest.fn();

    document.addEventListener('click', spy);

    document.body.click();

    await sleep();

    expect(spy).toHaveBeenCalled();
  });

  test('should give a black color to the letter when the slotIndex is not in the textColorValues', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    const letter = element()?.shadowRoot?.querySelector('.who-is-online-dropdown__avatar');

    const backgroundColor = MeetingColorsHex[mockParticipants[0].slotIndex];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #26242A`,
    );
  });

  test('should give a white color to the letter when the slotIndex is in the textColorValues', async () => {
    const participant = {
      ...mockParticipants[0],
      slotIndex: 2,
      color: MeetingColorsHex[2],
    };

    createEl({
      position: 'bottom-right',
      align: 'left',
      participants: [participant],
    });

    await sleep();

    const letter = element()?.shadowRoot?.querySelector('.who-is-online-dropdown__avatar');

    const backgroundColor = MeetingColorsHex[2];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #FFFFFF`,
    );
  });

  test('should not render participants when there is no participant', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();
    expect(dropdownMenu()?.children?.length).toBe(0);
  });

  test('should render participants when there is participant', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    expect(dropdownMenu()?.children?.length).toBe(1);
  });

  test('should change selected participant when click on it', async () => {
    createEl({ position: 'bottom-right', align: 'left', participants: mockParticipants });

    await sleep();

    const participant = element()?.shadowRoot?.querySelector(
      '.who-is-online-dropdown__content',
    ) as HTMLElement;

    participant.click();

    await sleep();

    expect(element()?.['selected']).toBe(mockParticipants[0].id);
  });

  // @TODO: create tests in V2 (dropdownOptionsHandler does not have an implementation yet)
  test('', async () => {
    const event = new CustomEvent('selected');
    createEl({
      position: 'bottom-right',
      align: 'left',
      participants: mockParticipants,
    });

    await sleep();

    const dropdown = element()?.shadowRoot?.querySelector('superviz-dropdown') as HTMLElement;

    dropdown.dispatchEvent(event);
  });
});
