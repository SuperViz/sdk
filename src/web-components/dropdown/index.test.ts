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
  showTooltip?: boolean;
}

export const createEl = ({
  position,
  align,
  label,
  returnTo,
  options,
  name,
  icons,
  showTooltip,
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

  if (showTooltip) {
    const onHoverData = {
      name: 'onHover',
      action: 'Click to see more',
    };
    element.setAttribute('onHoverData', JSON.stringify(onHoverData));
    element.setAttribute('canShowTooltip', 'true');
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
  element.style.top = '100px';
  element.style.right = '100px';

  const divWrapper = document.createElement('div');
  divWrapper.style.height = '500px';
  divWrapper.style.width = '500px';

  const divContainer = document.createElement('div');
  divContainer.style.height = '300px';
  divContainer.style.width = '300px';
  divContainer.style.overflow = 'scroll';
  divContainer.classList.add('container');

  divWrapper.appendChild(element);
  divContainer.appendChild(divWrapper);

  document.body.style.height = '1000px';
  document.body.style.width = '1000px';
  document.body.appendChild(divContainer);
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
    const el = createEl({ position: 'bottom-left', align: 'left', icons: ['left', 'right'] });
    await sleep();

    dropdownContent()?.click();
    await sleep();

    expect(el['open']).toBe(true);

    dropdownContent()?.click();
    await sleep();

    expect(el['open']).toBe(false);
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

    expect(element()!['emitEvent']).toHaveBeenNthCalledWith(
      3,
      'selected',
      {
        uuid: 'any_uuid',
      },
      {
        bubbles: false,
        composed: true,
      },
    );
  });

  describe('based on dropdown original position', () => {
    test('should reposition dropdown to bottom-left if top, center and right are out of screen', async () => {
      const el = createEl({ position: 'top-right', align: 'left', icons: ['left', 'right'] });

      el.style.top = '0px';
      el.style.right = '0px';
      el.style.left = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('bottom-left');
    });

    test('should reposition dropdown to bottom-center if top and right are out of screen', async () => {
      const el = createEl({ position: 'top-right', align: 'left', icons: ['left', 'right'] });

      el.style.top = '0px';
      el.style.right = '70px';
      el.style.left = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('bottom-center');
    });

    test('should reposition dropdown to bottom-right if top is out of screen', async () => {
      const el = createEl({ position: 'top-right', align: 'left', icons: ['left', 'right'] });

      el.style.top = '0px';
      el.style.right = '150px';
      el.style.left = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('bottom-right');
    });

    test('should reposition dropdown to top-right if bottom, center and left are out of screen', async () => {
      const el = createEl({ position: 'bottom-left', align: 'left', icons: ['left', 'right'] });

      el.style.left = '0px';
      el.style.bottom = '0px';
      el.style.top = 'auto';
      el.style.right = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('top-right');
    });

    test('should reposition dropdown to top-center if bottom and left are out of screen', async () => {
      const el = createEl({ position: 'bottom-left', align: 'left', icons: ['left', 'right'] });

      el.style.left = '70px';
      el.style.bottom = '0px';
      el.style.top = 'auto';
      el.style.right = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('top-center');
    });

    test('should reposition dropdown to top-left if bottom is out of screen', async () => {
      const el = createEl({ position: 'bottom-left', align: 'left', icons: ['left', 'right'] });

      el.style.left = '150px';
      el.style.bottom = '0px';
      el.style.top = 'auto';
      el.style.right = 'auto';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position']).toBe('top-left');
    });

    test('should keep dropdown orientation even if outside of screen', async () => {
      const el = createEl({ position: 'bottom-left', align: 'left', icons: ['left', 'right'] });

      el.style.left = 'auto';
      el.style.right = '-50px';
      el['host'] = element();

      await sleep();

      dropdownContent()?.click();
      await sleep();

      expect(el['position'].includes('left')).toBeTruthy();
    });

    test('should return to the original position after having more space', async () => {
      const el = createEl({ position: 'bottom-center', align: 'left', icons: ['left', 'right'] });

      await sleep();

      dropdownContent()?.click();

      await sleep();

      expect(el['originalPosition']).toBe('bottom-center');
      expect(el['position']).toBe(el['originalPosition']);

      el.style.bottom = '0px';
      el.style.top = 'auto';
      el['host'] = element();

      await sleep();

      expect(el['position']).toBe('top-center');

      el.style.bottom = 'auto';
      el.style.top = '0px';
      el['host'] = element();

      await sleep();

      expect(el['originalPosition']).toBe('bottom-center');
      expect(el['position']).toBe(el['originalPosition']);
    });
  });

  describe('tooltip', () => {
    test('should render tooltip if can show it', async () => {
      createEl({ position: 'bottom-right', align: 'left', showTooltip: true });
      await sleep();

      const tooltip = element()?.shadowRoot?.querySelector('superviz-tooltip');

      expect(tooltip).toBeTruthy();
    });
  });
});
