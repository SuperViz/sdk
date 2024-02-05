import '.';
import { MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import sleep from '../../../common/utils/sleep';
import { Participant } from '../../../components/who-is-online/types';

interface elementProps {
  position: string;
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
  label,
  returnTo,
  name,
  icons,
  participants,
}: elementProps): HTMLElement => {
  const element: HTMLElement = document.createElement('superviz-who-is-online-dropdown');

  /* eslint-disable no-unused-expressions */
  label && element.setAttribute('label', label);
  returnTo && element.setAttribute('returnTo', returnTo);
  name && element.setAttribute('name', name);
  icons && element.setAttribute('icons', JSON.stringify(icons));
  !!participants?.length && element.setAttribute('participants', JSON.stringify(participants));
  /* eslint-enable no-unused-expressions */

  element.setAttribute('position', position);

  const elementSlot = document.createElement('div');
  elementSlot.setAttribute('slot', 'dropdown');
  elementSlot.innerHTML = 'X';
  element.appendChild(elementSlot);
  element.style.position = 'absolute';

  const divWrapper = document.createElement('div');
  divWrapper.style.height = '1500px';
  divWrapper.style.width = '1500px';
  divWrapper.style.position = 'relative';

  const divContainer = document.createElement('div');
  divContainer.style.height = '1000px';
  divContainer.style.width = '1000px';
  divContainer.style.overflow = 'scroll';
  divContainer.classList.add('container');

  divWrapper.appendChild(element);
  divContainer.appendChild(divWrapper);

  document.body.style.height = '1000px';
  document.body.style.width = '1000px';
  document.body.appendChild(divContainer);
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

describe('who-is-online-dropdown', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should render dropdown', () => {
    createEl({ position: 'bottom', participants: mockParticipants });
    const element = document.querySelector('superviz-who-is-online-dropdown');

    expect(element).not.toBeNull();
  });

  test('should open dropdown when click on it', async () => {
    createEl({ position: 'bottom', participants: mockParticipants });

    await sleep();

    dropdownContent()?.click();

    await sleep();
    const isOpen = dropdownMenu()?.classList.contains('menu-open');
    expect(isOpen).toBeTruthy();
  });

  test('should close dropdown when click on it', async () => {
    createEl({ position: 'bottom', participants: mockParticipants });

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
    createEl({ position: 'bottom', participants: mockParticipants });

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
    createEl({ position: 'bottom', participants: mockParticipants });

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
    createEl({ position: 'bottom', participants: mockParticipants });

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

    createEl({ position: 'bottom', participants: [participant] });

    await sleep();

    const letter = element()?.shadowRoot?.querySelector('.who-is-online-dropdown__avatar');

    const backgroundColor = MeetingColorsHex[2];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #FFFFFF`,
    );
  });

  test('should not render participants when there is no participant', async () => {
    createEl({ position: 'bottom' });

    await sleep();
    expect(dropdownMenu()?.children?.length).toBe(0);
  });

  test('should render participants when there is participant', async () => {
    createEl({ position: 'bottom', participants: mockParticipants });

    await sleep();

    expect(dropdownMenu()?.children?.length).toBe(1);
  });

  test('should change selected participant when click on it', async () => {
    createEl({ position: 'bottom', participants: mockParticipants });

    await sleep();

    const participant = element()?.shadowRoot?.querySelector(
      '.who-is-online-dropdown__content',
    ) as HTMLElement;

    participant.click();

    await sleep();

    expect(element()?.['selected']).toBe(mockParticipants[0].id);
  });

  describe('based on dropdown original position', () => {
    test('should reposition dropdown to bottom if top is out of screen', async () => {
      const el = createEl({ position: 'top', participants: mockParticipants });
      expect(el['position']).toBe('top');

      el.style.bottom = 'auto';
      el.style.top = '0px';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();

      await sleep();

      expect(el['position']).toBe('bottom');
    });

    test('should reposition dropdown to top if bottom is out of screen', async () => {
      const el = createEl({ position: 'bottom', participants: mockParticipants });
      expect(el['position']).toBe('bottom');

      el.style.top = 'auto';
      el.style.bottom = '-10px';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();

      await sleep();

      expect(el['position']).toBe('top');
    });
  });
});
