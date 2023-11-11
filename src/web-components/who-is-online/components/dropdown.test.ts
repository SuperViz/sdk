import '.';

import sleep from '../../../common/utils/sleep';

import { Participant } from './types';

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

const mockParticipants = [
  {
    name: 'name 1',
    color: '#000',
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

  if (label) {
    element.setAttribute('label', label);
  }

  if (returnTo) {
    element.setAttribute('returnTo', returnTo);
  }

  if (name) {
    element.setAttribute('name', name);
  }

  if (icons) {
    element.setAttribute('icons', JSON.stringify(icons));
  }

  if (participants?.length) {
    element.setAttribute('participants', JSON.stringify(participants));
  }

  if (options) {
    element.setAttribute('options', JSON.stringify(options));
  }

  if (!options) {
    const defaultOptions = [
      {
        name: 'EDIT',
        value: {
          uuid: 'any_uuid',
        },
      },
      {
        name: 'DELETE',
        value: {
          uuid: 'any_uuid',
        },
      },
    ];

    element.setAttribute('position', position);
    element.setAttribute('align', align);
    element.setAttribute('options', JSON.stringify(defaultOptions));
  }

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

  test('should call options handler when selecting an option', async () => {});
});
