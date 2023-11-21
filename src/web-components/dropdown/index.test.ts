import { drop } from 'lodash';
import '.';

import sleep from '../../common/utils/sleep';

interface elementProps {
  position: string;
  align: string;
  label?: string;
  returnTo?: string;
  options?: Record<string, unknown>;
  name?: string;
  icons?: string[];
}

export const createEl = ({
  position,
  align,
  label,
  returnTo,
  options,
  name,
  icons,
}: elementProps): HTMLElement => {
  const element: HTMLElement = document.createElement('superviz-dropdown');

  if (label) {
    element.setAttribute('label', label);
  }

  if (returnTo) {
    element.setAttribute('returnTo', returnTo);
  }

  if (options) {
    element.setAttribute('options', JSON.stringify(options));
  }

  if (name) {
    element.setAttribute('name', name);
  }

  if (icons) {
    element.setAttribute('icons', JSON.stringify(icons));
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
  element.style.position = 'absolute';

  element.style.left = '-10px';
  element.style.top = '0px';

  document.body.appendChild(element);
  return element;
};

const element = () => document.querySelector('superviz-dropdown') as HTMLElement | null;
const dropdown = () => element()?.shadowRoot?.querySelector('.dropdown') as HTMLElement | null;
const dropdownContent = () => dropdown()?.querySelector('.dropdown-content') as HTMLElement | null;
const dropdownMenu = () => {
  return element()?.shadowRoot?.querySelector('.menu') as HTMLElement | null;
};
const dropdownListUL = () => {
  return dropdownMenu()?.querySelector('ul') as HTMLElement | null;
};

describe('dropdown', () => {
  afterEach(() => {
    document.body.querySelector('superviz-dropdown')?.remove();
  });

  test('should render dropdown', () => {
    createEl({ position: 'bottom-right', align: 'left' });
    const element = document.querySelector('superviz-dropdown');

    expect(element).not.toBeNull();
  });

  test('should open dropdown when click on it', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    dropdownContent()?.click();

    await sleep();
    const isOpen = dropdownMenu()?.classList.contains('menu-open');
    expect(isOpen).toBeTruthy();
  });

  test('should close dropdown when click on it', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

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

  test('should close dropdown when click on option', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    dropdownContent()?.click();

    await sleep();

    const option = dropdownListUL()?.querySelector('li');

    option?.click();

    await sleep();

    const isOpen = dropdownMenu()?.classList.contains('menu-open');

    expect(isOpen).toBeFalsy();
  });

  test('should emit event when click on option', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    dropdownContent()?.click();

    await sleep();

    const option = dropdownListUL()?.querySelector('li');

    const spy = jest.fn();

    element()?.addEventListener('selected', spy);

    option?.click();

    await sleep();

    expect(spy).toHaveBeenCalled();
  });

  test('should listen click event when click out', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    dropdownContent()?.click();

    await sleep();

    const spy = jest.fn();

    document.addEventListener('click', spy);

    document.body.click();

    await sleep();

    expect(spy).toHaveBeenCalled();
  });

  test('should emit event with all content when returnTo not specified', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    dropdownContent()?.click();

    await sleep();

    const option = dropdownListUL()?.querySelector('li');

    const spy = jest.fn();

    element()?.addEventListener('selected', spy);

    option?.click();

    await sleep();

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          name: 'EDIT',
          value: {
            uuid: 'any_uuid',
          },
        },
      }),
    );
  });

  test('should not render header with a name if name is not specified', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    const header = dropdownMenu()?.querySelector('.header');
    expect(header).toBeFalsy();
  });

  test('should render header with a name if name is specified', async () => {
    createEl({ position: 'bottom-right', align: 'left', name: 'name' });

    await sleep();

    const header = dropdownMenu()?.querySelector('.header');
    expect(header?.children.length).not.toBe(0);
  });

  test('should not show icons if icons is not specified', async () => {
    createEl({ position: 'bottom-right', align: 'left' });

    await sleep();

    const icons = dropdownListUL()?.querySelector('superviz-icon');

    expect(icons).toBeNull();
  });

  test('should show icons if icons is specified', async () => {
    createEl({ position: 'bottom-right', align: 'left', icons: ['left', 'right'] });

    await sleep();

    const icons = dropdownListUL()?.querySelector('superviz-icon');

    expect(icons).not.toBeNull();
  });

  test('should emit event with returnTo content when returnTo specified', async () => {
    createEl({ position: 'bottom-right', align: 'left', label: 'name', returnTo: 'value' });

    await sleep();

    element()!['emitEvent'] = jest.fn();

    dropdownContent()?.click();

    await sleep();

    const option = dropdownListUL()?.querySelector('li');

    option?.click();

    await sleep();

    expect(element()!['emitEvent']).toHaveBeenCalledWith(
      'selected',
      {
        uuid: 'any_uuid',
      },
      {
        bubbles: false,
        composed: false,
      },
    );
  });

  test('should reposition dropdown to bottom-left if top, center and right are out of screen', async () => {
    const el = createEl({ position: 'top-right', align: 'left', icons: ['left', 'right'] });
    await sleep();

    const oldLeft = Number(el.style.left.slice(0, 2));
    const { left, right } = el['dropdownBounds'];

    el.style.left = 'auto';
    el.style.right = (window.innerWidth + oldLeft - (right - left)).toString();

    await sleep();

    dropdownContent()?.click();

    await sleep();

    expect(el['position']).toBe('bottom-left');
  });

  test('should reposition dropdown to top-left if top, center and right are out of screen', async () => {
    const el = createEl({ position: 'bottom-right', align: 'left', icons: ['left', 'right'] });
    await sleep();

    const oldLeft = Number(el.style.left.slice(0, 2));
    const { left, right } = el['dropdownBounds'];

    el.style.left = 'auto';
    el.style.right = (window.innerWidth + oldLeft - (right - left)).toString();

    await sleep();

    dropdownContent()?.click();

    await sleep();

    expect(el['position']).toBe('bottom-left');
  });
});
