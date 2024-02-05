import '.';
import sleep from '../../../common/utils/sleep';

const createEl = (): HTMLElement => {
  const element: HTMLElement = document.createElement('superviz-who-is-online-messages');

  const elementWrapper = document.createElement('div');
  elementWrapper.style.height = '1500px';
  elementWrapper.style.width = '1500px';
  elementWrapper.style.position = 'relative';
  elementWrapper.appendChild(element);

  document.body.style.height = '1000px';
  document.body.style.width = '1000px';
  document.body.appendChild(elementWrapper);
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

describe('messages', () => {
  let element: HTMLElement;
  const genericId1 = 'generic-id-1';
  const genericName1 = 'generic-name-1';
  const genericColor1 = 'rgb(170, 187, 204)';

  beforeEach(() => {
    element = createEl();
  });

  describe('followingMessage', () => {
    test('should do nothing if following is not defined', () => {
      expect(element['followingMessage']()).toBe('');
    });

    test('should render message if following is defined', async () => {
      element['following'] = {
        id: genericId1,
        name: genericName1,
        color: genericColor1,
      };

      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector('.wio__following-message') as HTMLElement;

      expect(message).toBeTruthy();
      expect(window.getComputedStyle(message).borderColor).toBe(genericColor1);
      expect(message.innerText).toBe(`Following: ${genericName1} Stop`);
    });

    test('should call stopFollowing when stop button is clicked', async () => {
      element['following'] = {
        id: genericId1,
        name: genericName1,
        color: genericColor1,
      };

      element['stopFollowing'] = jest.fn();
      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector('.wio__following-message') as HTMLElement;
      const stopButton = message.querySelector('.wio__pcm__cancel-action-button') as HTMLElement;

      expect(stopButton).toBeTruthy();

      stopButton.click();

      await sleep();

      expect(element['stopFollowing']).toHaveBeenCalled();
    });
  });

  describe('everyoneFollowsMeMessage', () => {
    test('should do nothing if everyoneFollowsMe is not defined', () => {
      expect(element['everyoneFollowsMeMessage']()).toBe('');
    });

    test('should render message if everyoneFollowsMe is defined', async () => {
      element['everyoneFollowsMe'] = true;
      element['participantColor'] = genericColor1;

      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector('.wio__follow-me-message') as HTMLElement;

      expect(message).toBeTruthy();
      expect(window.getComputedStyle(message).borderColor).toBe(genericColor1);
      expect(message.innerText).toBe(`Everyone is following you Stop`);
    });

    test('should call stopEveryoneFollowsMe when stop button is clicked', async () => {
      element['everyoneFollowsMe'] = true;
      element['participantColor'] = genericColor1;

      element['stopEveryoneFollowsMe'] = jest.fn();
      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector('.wio__follow-me-message') as HTMLElement;
      const stopButton = message.querySelector('.wio__pcm__cancel-action-button') as HTMLElement;

      expect(stopButton).toBeTruthy();

      stopButton.click();

      await sleep();

      expect(element['stopEveryoneFollowsMe']).toHaveBeenCalled();
    });
  });

  describe('privateMessage', () => {
    test('should do nothing if isPrivate is not defined', () => {
      expect(element['everyoneFollowsMeMessage']()).toBe('');
    });

    test('should render message if isPrivate is defined', async () => {
      element['isPrivate'] = true;
      element['participantColor'] = genericColor1;

      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector(
        '.wio__private-mode-message',
      ) as HTMLElement;

      expect(message).toBeTruthy();
      expect(window.getComputedStyle(message).borderColor).toBe(genericColor1);
      expect(message.innerText).toBe(`You are in Private Mode Cancel`);
    });

    test('should call cancelPrivate when stop button is clicked', async () => {
      element['isPrivate'] = true;
      element['participantColor'] = genericColor1;

      element['cancelPrivate'] = jest.fn();
      element['requestUpdate']();

      await sleep();

      const message = element.shadowRoot?.querySelector(
        '.wio__private-mode-message',
      ) as HTMLElement;
      const stopButton = message.querySelector('.wio__pcm__cancel-action-button') as HTMLElement;

      expect(stopButton).toBeTruthy();

      stopButton.click();

      await sleep();

      expect(element['cancelPrivate']).toHaveBeenCalled();
    });
  });
});
