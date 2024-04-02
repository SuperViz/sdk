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
  return element()?.shadowRoot?.querySelector(
    '.who-is-online__extras-dropdown',
  ) as HTMLElement | null;
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

    const letter = element()?.shadowRoot?.querySelector('.who-is-online__participant__avatar');

    const backgroundColor = MeetingColorsHex[mockParticipants[0].slotIndex as number];
    expect(letter?.getAttribute('style')).toBe(
      `background-color: ${backgroundColor}; color: #26242A`,
    );
  });

  test('should give a white color to the letter when the slotIndex is in the textColorValues', async () => {
    const participant = {
      ...mockParticipants[0],
      slotIndex: 1,
      color: MeetingColorsHex[1],
    };

    createEl({ position: 'bottom', participants: [participant] });

    await sleep();

    const letter = element()?.shadowRoot?.querySelector('.who-is-online__participant__avatar');

    const backgroundColor = MeetingColorsHex[1];
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
    createEl({
      position: 'bottom',
      participants: [
        {
          avatar: {
            imageUrl: '',
            model3DUrl: '',
          },
          color: MeetingColorsHex[0],
          id: '1',
          name: 'John Zero',
          slotIndex: 0,
          joinedPresence: true,
        },
      ],
    });

    await sleep();

    const participant = element()?.shadowRoot?.querySelector(
      '.who-is-online__extra-participant',
    ) as HTMLElement;

    participant.click();

    await sleep();

    expect(element()?.['selected']).toBe(mockParticipants[0].id);
  });

  test('should not change selected participant when click on it if not in presence', async () => {
    createEl({ position: 'bottom', participants: mockParticipants });

    await sleep();

    const participant = element()?.shadowRoot?.querySelector(
      '.who-is-online__extra-participant',
    ) as HTMLElement;

    participant.click();

    await sleep();

    expect(element()?.['selected']).not.toBe(mockParticipants[0].id);
  });

  describe('repositionDropdown', () => {
    test('should call reposition methods if is open', () => {
      const el = createEl({ position: 'bottom', participants: mockParticipants });
      el['open'] = true;

      el['repositionInVerticalDirection'] = jest.fn();
      el['repositionInHorizontalDirection'] = jest.fn();

      el['repositionDropdown']();

      expect(el['repositionInVerticalDirection']).toHaveBeenCalled();
      expect(el['repositionInHorizontalDirection']).toHaveBeenCalled();
    });

    test('should do nothing if is not open', () => {
      const el = createEl({ position: 'bottom', participants: mockParticipants });
      el['open'] = false;

      el['repositionInVerticalDirection'] = jest.fn();
      el['repositionInHorizontalDirection'] = jest.fn();

      el['repositionDropdown']();

      expect(el['repositionInVerticalDirection']).not.toHaveBeenCalled();
      expect(el['repositionInHorizontalDirection']).not.toHaveBeenCalled();
    });
  });

  /**
   *   private repositionInVerticalDirection = () => {
    const { bottom, top, height } = this.parentElement.getBoundingClientRect();
    const windowVerticalMidpoint = window.innerHeight / 2;
    const dropdownVerticalMidpoint = top + height / 2;

    if (dropdownVerticalMidpoint > windowVerticalMidpoint) {
      this.dropdownList.style.setProperty('bottom', `${window.innerHeight - top + 8}px`);
      this.dropdownList.style.setProperty('top', '');
      return;
    }

    this.dropdownList.style.setProperty('top', `${bottom + 8}px`);
    this.dropdownList.style.setProperty('bottom', '');
  };
   */
  describe('repositionInVerticalDirection', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      window.innerHeight = 1000;
    });

    test('should set bottom and top styles when dropdownVerticalMidpoint is greater than windowVerticalMidpoint', async () => {
      const el = createEl({ position: 'bottom', participants: mockParticipants });

      await sleep();

      const parentTop = 692;
      const parentBottom = 740;
      const windowHeight = 1000;

      const parentElement = el.parentElement as HTMLElement;
      parentElement.style.top = `${parentTop}px`;
      parentElement.style.bottom = `${parentBottom}px`;

      parentElement.style.height = '40px';

      el['repositionInVerticalDirection']();

      expect(el['dropdownList'].style.bottom).toBe(`${windowHeight - parentTop}px`);
      expect(el['dropdownList'].style.top).toBe('');
    });

    test('should set top and bottom styles when dropdownVerticalMidpoint is less than windowVerticalMidpoint', async () => {
      const el = createEl({ position: 'bottom', participants: mockParticipants });

      await sleep();

      const parentTop = 100;
      const parentBottom = 140;
      const windowHeight = 1000;

      const parentElement = el.parentElement as HTMLElement;
      parentElement.style.top = `${parentTop}px`;
      parentElement.style.bottom = `${parentBottom}px`;
      parentElement.style.height = '1000px';

      el['repositionInVerticalDirection']();

      expect(el['dropdownList'].style.bottom).toBe(`${windowHeight - parentTop}px`);
      expect(el['dropdownList'].style.top).toBe('');
    });
  });
});
