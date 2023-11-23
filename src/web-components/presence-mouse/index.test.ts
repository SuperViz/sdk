import { MouseOptions } from '../../components/presence-mouse/types';
import '.';

const createEl = async () => {
  const element = document.createElement('superviz-presence-mouse');
  document.body.appendChild(element);
  await element['updateComplete'];
  return element;
};

describe('PresenceMouse', () => {
  afterEach(() => {
    document.body.querySelector('superviz-presence-mouse')?.remove();
  });

  describe('updatePresenceMouseParticipant', () => {
    it('should add a new mouse follower element if it does not exist', async () => {
      const renderedElement = await createEl();
      const externalParticipant: MouseOptions = {
        id: 'participant1',
        name: 'participant',
        slotIndex: 1,
        color: '#FF0000',
        mousePositionX: 10,
        mousePositionY: 20,
        originalWidth: 100,
        originalHeight: 100,
        containerId: 'container',
      };

      renderedElement!.shadowRoot!.getElementById = jest.fn().mockReturnValue(null);

      renderedElement['updatePresenceMouseParticipant'](externalParticipant);

      expect(renderedElement!.shadowRoot!.getElementById).toHaveBeenCalledWith(
        `mouse-${externalParticipant.id}`,
      );
    });

    it('should update the existing mouse follower element if it exists', async () => {
      const renderedElement = await createEl();
      const externalParticipant: MouseOptions = {
        id: 'participant1',
        name: 'participant',
        slotIndex: 1,
        color: '#FF0000',
        mousePositionX: 10,
        mousePositionY: 20,
        originalWidth: 100,
        originalHeight: 100,
        containerId: 'container',
      };

      const mouseFollowerElement = document.createElement('div');
      mouseFollowerElement.setAttribute('id', `mouse-${externalParticipant.id}`);
      mouseFollowerElement.setAttribute('class', 'mouse-follower');

      const mouseUserNameElement = document.createElement('div');
      mouseUserNameElement.setAttribute('class', 'mouse-user-name');
      mouseUserNameElement.innerHTML = externalParticipant.name;

      renderedElement!.shadowRoot!.getElementById = jest.fn().mockReturnValue(mouseFollowerElement);
      mouseFollowerElement!.getElementsByClassName = jest
        .fn()
        .mockReturnValue([mouseUserNameElement]);

      renderedElement['updatePresenceMouseParticipant'](externalParticipant);

      expect(renderedElement!.shadowRoot!.getElementById).toHaveBeenCalledWith(
        `mouse-${externalParticipant.id}`,
      );
      expect(mouseUserNameElement.style.color).toBe('rgb(38, 36, 42)');
      expect(mouseUserNameElement.style.backgroundColor).toBe('rgb(255, 0, 0)');
      expect(mouseUserNameElement.innerHTML).toBe(externalParticipant.name);
      expect(mouseFollowerElement.style.left).toBe('0.1px');
      expect(mouseFollowerElement.style.top).toBe('0.2px');
    });
  });

  describe('removePresenceMouseParticipant', () => {
    it('should remove the mouse follower element if it exists', async () => {
      const renderedElement = await createEl();
      const participantId = 'participant1';
      const mouseFollowerElement = document.createElement('div');

      renderedElement!.shadowRoot!.getElementById = jest.fn().mockReturnValue(mouseFollowerElement);
      mouseFollowerElement.remove = jest.fn();

      renderedElement['removePresenceMouseParticipant'](participantId);

      expect(renderedElement!.shadowRoot!.getElementById).toHaveBeenCalledWith(
        `mouse-${participantId}`,
      );
      expect(mouseFollowerElement.remove).toHaveBeenCalled();
    });

    it('should do nothing if the mouse follower element does not exist', async () => {
      const renderedElement = await createEl();
      const participantId = 'participant1';

      renderedElement!.shadowRoot!.getElementById = jest.fn().mockReturnValue(null);

      renderedElement['removePresenceMouseParticipant'](participantId);

      expect(renderedElement!.shadowRoot!.getElementById).toHaveBeenCalledWith(
        `mouse-${participantId}`,
      );
    });
  });
});