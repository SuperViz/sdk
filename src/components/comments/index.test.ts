import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';

import { CommentsComponent } from './index';

describe('CommentsComponent', () => {
  let commentsComponent: CommentsComponent;

  beforeEach(() => {
    commentsComponent = new CommentsComponent();
  });

  it('should create a new instance of CommentsComponent', () => {
    expect(commentsComponent).toBeInstanceOf(CommentsComponent);
  });

  it('should have a name property', () => {
    expect(commentsComponent['name']).toBe('Comments');
  });

  it('should have a logger property', () => {
    expect(commentsComponent['logger']).toBeDefined();
  });

  it('should have an element property', () => {
    expect(commentsComponent['element']).toBeUndefined();
  });

  it('should create a new element when start() is called', () => {
    commentsComponent.attach({
      realtime: ABLY_REALTIME_MOCK,
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });
    commentsComponent.detach();
    expect(commentsComponent['element']).toBeDefined();
  });

  it('should add the element to the document body when start() is called', () => {
    commentsComponent.attach({
      realtime: ABLY_REALTIME_MOCK,
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    expect(document.body.contains(commentsComponent['element'])).toBe(true);
  });

  it('should remove the element from the document body when destroy() is called', async () => {
    commentsComponent.attach({
      realtime: ABLY_REALTIME_MOCK,
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });
    commentsComponent.detach();

    expect(document.body.contains(commentsComponent['element'])).toBe(false);
  });
});
