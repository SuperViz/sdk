import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import {
  MOCK_ABLY_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_2,
  MOCK_LOCAL_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_1,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { RealtimeEvent, WhoIsOnlineEvent } from '../../common/types/events.types';
import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';
import { IOC } from '../../services/io';
import { Following } from '../../services/stores/who-is-online/types';

import { Avatar, Participant, TooltipData } from './types';

import { WhoIsOnline } from './index';

describe('Who Is Online', () => {
  let whoIsOnlineComponent: WhoIsOnline;

  beforeEach(async () => {
    jest.clearAllMocks();

    whoIsOnlineComponent = new WhoIsOnline();
    whoIsOnlineComponent.attach({
      ioc: new IOC(MOCK_LOCAL_PARTICIPANT),
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
      useStore,
    });

    whoIsOnlineComponent['localParticipantId'] = MOCK_LOCAL_PARTICIPANT.id;

    const gray = MeetingColorsHex[16];
    whoIsOnlineComponent['color'] = gray;
  });

  afterEach(() => {
    whoIsOnlineComponent.detach();
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });

  describe('start', () => {
    test('should create a new instance of Who Is Online', () => {
      expect(whoIsOnlineComponent).toBeInstanceOf(WhoIsOnline);
    });

    test('should position component inside div if id is provided', async () => {
      whoIsOnlineComponent['element'].remove();
      whoIsOnlineComponent['breakLayout'] = true;

      const div = document.createElement('div');

      div.id = 'unit-test-div';
      document.body.appendChild(div);
      whoIsOnlineComponent['position'] = 'unit-test-div';
      whoIsOnlineComponent['positionWhoIsOnline']();

      expect(div.parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].parentElement).toBe(div);
      expect(whoIsOnlineComponent['element'].position).toBe('position: relative;');
    });

    test('should position at top-right if no id is provided', async () => {
      expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 40px;');
    });

    test('should position at top-right if invalid id is provided', async () => {
      whoIsOnlineComponent['element'].remove();
      const randomIdNumber = Math.ceil(Math.random() * 100);
      whoIsOnlineComponent['position'] = `random-id${randomIdNumber}`;
      whoIsOnlineComponent['positionWhoIsOnline']();

      expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 40px;');
    });

    test('should allow an object with options in the constructor', () => {
      const whoIsOnlineComponent = new WhoIsOnline({
        position: 'bottom-left',
        styles: '.unit-test-class { color: red; }',
      });

      expect(whoIsOnlineComponent['position']).toBe('bottom-left');
    });

    test('should set default position when passing an object without position', () => {
      const whoIsOnlineComponent = new WhoIsOnline({
        styles: '.unit-test-class { color: red; }',
      });

      expect(whoIsOnlineComponent['position']).toBe('top-right');
    });
  });

  describe('onParticipantListUpdate', () => {
    let participants;

    beforeEach(() => {
      participants = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE)['participants'];
    });

    test('should correctly update participant list', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(participants.value.length).toBe(1);

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant2-ably-id': {
          ...MOCK_ABLY_PARTICIPANT,
          data: MOCK_ABLY_PARTICIPANT_DATA_2,
          id: 'unit-test-participant2-ably-id',
        },
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(participants.value.length).toBe(2);
    });

    test('should not update participant list if participant is does not have whoIsOnline activated', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': {
          ...MOCK_ABLY_PARTICIPANT,
          data: { ...MOCK_ABLY_PARTICIPANT, activeComponents: [] },
        },
      });

      expect(participants.value.length).toBe(0);
    });

    test('should not add the same participant twice', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(participants.value.length).toBe(1);

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(participants.value.length).toBe(1);
    });

    test('should not display private participants', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(participants.value.length).toBe(1);

      const privateParticipant = {
        ...MOCK_ABLY_PARTICIPANT,
        data: {
          ...MOCK_ABLY_PARTICIPANT.data,
          isPrivate: true,
        },
      };

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': privateParticipant,
      });

      expect(participants.value.length).toBe(0);
    });

    test('should display private local participant', () => {
      const participantsData = {};

      participantsData[MOCK_LOCAL_PARTICIPANT.id] = {
        ...MOCK_ABLY_PARTICIPANT,
        data: {
          ...MOCK_ABLY_PARTICIPANT.data,
          id: MOCK_LOCAL_PARTICIPANT.id,
        },
      };

      whoIsOnlineComponent['onParticipantListUpdate'](participantsData);

      expect(participants.value.length).toBe(1);

      participantsData[MOCK_LOCAL_PARTICIPANT.id].data.isPrivate = true;

      whoIsOnlineComponent['onParticipantListUpdate'](participantsData);

      expect(participants.value.length).toBe(1);
    });
  });

  describe('events', () => {
    beforeEach(() => {
      const participants = {};
      participants[MOCK_LOCAL_PARTICIPANT.id] = MOCK_ABLY_PARTICIPANT;
      participants[MOCK_ABLY_PARTICIPANT.id] = {
        ...MOCK_ABLY_PARTICIPANT,
        data: MOCK_ABLY_PARTICIPANT_DATA_2,
      };

      whoIsOnlineComponent['onParticipantListUpdate'](participants);
      whoIsOnlineComponent['element'].addEventListener = jest.fn();
    });

    test('should publish private to event bus and realtime', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, {
        detail: { isPrivate: false, id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['setPrivate'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_PRIVATE_MODE,
        false,
      );

      expect(whoIsOnlineComponent['realtime'].setPrivateWIOParticipant).toHaveBeenCalledWith(
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
        false,
      );
    });

    test('should publish local follow to event bus', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, {
        detail: { id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['followMousePointer'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT,
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
      );
    });

    test('should publish go-to to event bus', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, {
        detail: { id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['goToMousePointer'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
      );
    });
  });

  describe('setFollow', () => {
    beforeEach(() => {
      whoIsOnlineComponent['followMousePointer'] = jest
        .fn()
        .mockImplementation(whoIsOnlineComponent['followMousePointer']);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should set element.data to following.data', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);

      whoIsOnlineComponent['setFollow']({ ...MOCK_ABLY_PARTICIPANT, clientId: 'ably-id' });
      expect(following.value).toBe(MOCK_ABLY_PARTICIPANT_DATA_1);
    });

    test('should early return if following the local participant', () => {
      const followingData: Following = {
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      };
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish(followingData);

      whoIsOnlineComponent['setFollow'](MOCK_ABLY_PARTICIPANT);

      expect(whoIsOnlineComponent['followMousePointer']).not.toHaveBeenCalled();
      expect(following.value).toBe(followingData);
    });

    test('should set following to undefined if no id is passed', () => {
      const followingData: Following = {
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      };

      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish(followingData);

      whoIsOnlineComponent['setFollow']({
        ...MOCK_ABLY_PARTICIPANT,
        clientId: 'ably-id',
        data: { id: '' },
      });

      const event = {
        detail: { id: undefined },
      };

      expect(whoIsOnlineComponent['followMousePointer']).toHaveBeenCalledWith(event);
      expect(following.value).toBe(undefined);
    });
  });

  describe('follow', () => {
    test('should publish detail to realtime', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GATHER, {
        detail: {
          ...MOCK_ABLY_PARTICIPANT_DATA_1,
        },
      });

      whoIsOnlineComponent['follow'](event);

      expect(whoIsOnlineComponent['realtime'].setFollowWIOParticipant).toHaveBeenCalledWith(
        event.detail,
      );
    });
  });

  describe('stopFollowing', () => {
    test('should do nothing if participant leaving is not being followed', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish({
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      });

      whoIsOnlineComponent['stopFollowing'](MOCK_ABLY_PARTICIPANT);

      expect(following.value).toBeDefined();
      expect(following.value!.id).toBe(MOCK_ABLY_PARTICIPANT_DATA_2.id);
    });

    test('should set following to undefined if following the participant who is leaving', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish({
        color: MOCK_ABLY_PARTICIPANT_DATA_1.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_1.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_1.name,
      });

      whoIsOnlineComponent['stopFollowing']({
        clientId: MOCK_ABLY_PARTICIPANT_DATA_1.id,
      });

      expect(following.value).toBe(undefined);
      expect(whoIsOnlineComponent['following']).toBe(undefined);
    });
  });

  describe('gather', () => {
    test('should call setGatherWIOParticipant with detail', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GATHER, {
        detail: {
          ...MOCK_ABLY_PARTICIPANT_DATA_1,
        },
      });

      whoIsOnlineComponent['gather'](event);

      expect(whoIsOnlineComponent['realtime'].setGatherWIOParticipant).toHaveBeenCalledWith({
        ...event.detail,
      });
    });
  });

  describe('events', () => {
    beforeEach(() => {
      whoIsOnlineComponent['publish'] = jest.fn();
    });

    test('should publish "go to" event when goToMousePointer is called', () => {
      whoIsOnlineComponent['goToMousePointer']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.GO_TO_PARTICIPANT,
        'unit-test-id',
      );
    });

    test('should not publish "go to" event if id is equal to local participant id', () => {
      whoIsOnlineComponent['goToMousePointer']({
        detail: { id: MOCK_LOCAL_PARTICIPANT.id },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).not.toHaveBeenCalled();
    });

    test('should publish "follow" event when followMousePointer is called', () => {
      const followingData: Following = {
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      };
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish(followingData);

      whoIsOnlineComponent['followMousePointer']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.START_FOLLOWING_PARTICIPANT,
        followingData,
      );
    });

    test('should publish "stop following" if follow is called with undefined id', () => {
      const followingData: Following = {
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      };
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish(undefined);

      whoIsOnlineComponent['followMousePointer']({
        detail: { id: undefined },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT,
      );
    });

    test('should publish "stop following" event when stopFollowing is called', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish({
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      });

      whoIsOnlineComponent['stopFollowing']({
        clientId: MOCK_ABLY_PARTICIPANT_DATA_2.id,
      });

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT,
      );
    });

    test('should publish "enter private mode" event when setPrivate is called with isPrivate as true', () => {
      whoIsOnlineComponent['setPrivate']({
        detail: { isPrivate: true, id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.ENTER_PRIVATE_MODE,
      );
    });

    test('should publish "leave private mode" event when setPrivate is called with isPrivate as false', () => {
      whoIsOnlineComponent['setPrivate']({
        detail: { isPrivate: false, id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.LEAVE_PRIVATE_MODE,
      );
    });

    test('should publish "follow me" event when follow is called with defined id', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      const followingData: Following = {
        color: MOCK_ABLY_PARTICIPANT_DATA_2.color,
        id: MOCK_ABLY_PARTICIPANT_DATA_2.id,
        name: MOCK_ABLY_PARTICIPANT_DATA_2.name,
      };

      following.publish(followingData);

      whoIsOnlineComponent['follow']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.START_FOLLOW_ME,
        followingData,
      );
    });

    test('should publish "stop follow me" event when follow is called with undefined id', () => {
      const { following } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      following.publish(undefined);

      whoIsOnlineComponent['follow']({
        detail: { id: undefined },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(WhoIsOnlineEvent.STOP_FOLLOW_ME);
    });
  });

  describe('setStyles', () => {
    test('should append style element with user styles to head', () => {
      const styles = `
        .unit-test-class {
          color: red;
        }`;

      whoIsOnlineComponent['setStyles'](styles);
      const styleElement = document.getElementById('superviz-who-is-online-styles');
      expect(styleElement).toBeTruthy();
    });

    test('should do nothing if no styles are passed', () => {
      whoIsOnlineComponent['setStyles']();
      const styleElement = document.getElementById('superviz-who-is-online-styles');
      expect(styleElement).toBeFalsy();
    });
  });

  describe('followMousePointer', () => {
    test('should highlight participant being followed if they are an extra', () => {
      whoIsOnlineComponent['highlightParticipantBeingFollowed'] = jest.fn();

      whoIsOnlineComponent['followMousePointer']({
        detail: { id: 'test-id', source: 'extras' },
      } as any);

      expect(whoIsOnlineComponent['highlightParticipantBeingFollowed']).toHaveBeenCalled();
    });
  });

  describe('shouldDisableDropdown', () => {
    test('should disable dropdown when joinedPresence is false', () => {
      whoIsOnlineComponent['useStore'] = jest.fn().mockReturnValue({
        joinedPresence: { value: false },
        disablePresenceControls: { value: false },
        disableFollowMe: { value: false },
        disableFollowParticipant: { value: false },
        disableGoToParticipant: { value: false },
        disableGatherAll: { value: false },
        disablePrivateMode: { value: false },
        destroy: jest.fn(),
      });

      expect(
        whoIsOnlineComponent['shouldDisableDropdown']({
          activeComponents: ['PresenceButton'],
          participantId: 'someId',
        }),
      ).toEqual(true);
    });

    test('should disable dropdown when disablePresenceControls is true', () => {
      whoIsOnlineComponent['useStore'] = jest.fn().mockReturnValue({
        joinedPresence: { value: true },
        disablePresenceControls: { value: true },
        disableFollowMe: { value: false },
        disableFollowParticipant: { value: false },
        disableGoToParticipant: { value: false },
        disableGatherAll: { value: false },
        disablePrivateMode: { value: false },
        destroy: jest.fn(),
      });

      expect(
        whoIsOnlineComponent['shouldDisableDropdown']({
          activeComponents: ['PresenceButton'],
          participantId: 'someId',
        }),
      ).toEqual(true);
    });

    test('should disable dropdown for local participant with specific conditions', () => {
      whoIsOnlineComponent['useStore'] = jest.fn().mockReturnValue({
        joinedPresence: { value: true },
        disablePresenceControls: { value: false },
        disableFollowMe: { value: true },
        disablePrivateMode: { value: true },
        disableGatherAll: { value: true },
        disableFollowParticipant: { value: true },
        disableGoToParticipant: { value: true },
        destroy: jest.fn(),
      });

      expect(
        whoIsOnlineComponent['shouldDisableDropdown']({
          activeComponents: ['PresenceButton'],
          participantId: 'localParticipantId',
        }),
      ).toEqual(true);
    });

    test('should not disable dropdown when conditions are not met', () => {
      whoIsOnlineComponent['useStore'] = jest.fn().mockReturnValue({
        joinedPresence: { value: true },
        disablePresenceControls: { value: false },
        disableFollowMe: { value: false },
        disableFollowParticipant: { value: false },
        disableGoToParticipant: { value: false },
        disableGatherAll: { value: false },
        disablePrivateMode: { value: false },
        destroy: jest.fn(),
      });

      expect(
        whoIsOnlineComponent['shouldDisableDropdown']({
          activeComponents: ['presence'],
          participantId: 'someId',
        }),
      ).toEqual(false);
    });

    test('should not disable dropdown when activeComponents do not match', () => {
      whoIsOnlineComponent['useStore'] = jest.fn().mockReturnValue({
        joinedPresence: { value: true },
        disablePresenceControls: { value: false },
        disableFollowMe: { value: false },
        disableFollowParticipant: { value: false },
        disableGoToParticipant: { value: false },
        disableGatherAll: { value: false },
        disablePrivateMode: { value: false },
        destroy: jest.fn(),
      });

      expect(
        whoIsOnlineComponent['shouldDisableDropdown']({
          activeComponents: ['OtherComponent'],
          participantId: 'someId',
        }),
      ).toEqual(true);
    });
  });

  describe('getTooltipData', () => {
    test('should return tooltip data for local participant', () => {
      const tooltipData = whoIsOnlineComponent['getTooltipData']({
        isLocalParticipant: true,
        name: 'John',
        presenceEnabled: true,
      });

      expect(tooltipData).toEqual({
        name: 'John (You)',
      });
    });

    test('should return tooltip data for remote participant with presence enabled', () => {
      const tooltipData = whoIsOnlineComponent['getTooltipData']({
        isLocalParticipant: false,
        name: 'Alice',
        presenceEnabled: true,
      });

      expect(tooltipData).toEqual({
        name: 'Alice',
        info: 'Click to follow',
      });
    });

    test('should return tooltip data for remote participant with presence disabled', () => {
      const tooltipData = whoIsOnlineComponent['getTooltipData']({
        isLocalParticipant: false,
        name: 'Bob',
        presenceEnabled: false,
      });

      expect(tooltipData).toEqual({
        name: 'Bob',
      });
    });

    test('should return tooltip data for local participant with presence disabled', () => {
      const tooltipData = whoIsOnlineComponent['getTooltipData']({
        isLocalParticipant: true,
        name: 'Jane',
        presenceEnabled: false,
      });

      expect(tooltipData).toEqual({
        name: 'Jane (You)',
      });
    });
  });

  describe('getAvatar', () => {
    const mockAvatar: Avatar = {
      imageUrl: 'https://example.com/avatar.jpg',
      color: 'white',
      firstLetter: 'L',
      slotIndex: 0,
    };

    test('should return avatar data with image URL', () => {
      const result = whoIsOnlineComponent['getAvatar']({
        avatar: mockAvatar as any,
        name: 'John Doe',
        color: '#007bff',
        slotIndex: 1,
      });

      expect(result).toEqual({
        imageUrl: 'https://example.com/avatar.jpg',
        firstLetter: 'J',
        color: '#007bff',
        slotIndex: 1,
      });
    });

    test('should return avatar data with default first letter', () => {
      const result = whoIsOnlineComponent['getAvatar']({
        avatar: {
          imageUrl: '',
          model3DUrl: '',
        },
        name: 'Alice Smith',
        color: '#dc3545',
        slotIndex: 2,
      });

      expect(result).toEqual({
        imageUrl: '',
        firstLetter: 'A',
        color: '#dc3545',
        slotIndex: 2,
      });
    });

    test('should handle empty name by defaulting to "A"', () => {
      const result = whoIsOnlineComponent['getAvatar']({
        avatar: mockAvatar as any,
        name: 'User name',
        color: '#28a745',
        slotIndex: 3,
      });

      expect(result).toEqual({
        imageUrl: 'https://example.com/avatar.jpg',
        firstLetter: 'U',
        color: '#28a745',
        slotIndex: 3,
      });
    });

    test('should handle undefined name by defaulting to "A"', () => {
      const result = whoIsOnlineComponent['getAvatar']({
        avatar: {
          imageUrl: '',
          model3DUrl: '',
        },
        name: '',
        color: '#ffc107',
        slotIndex: 4,
      });

      expect(result).toEqual({
        imageUrl: '',
        firstLetter: 'A',
        color: '#ffc107',
        slotIndex: 4,
      });
    });
  });

  describe('getControls', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should return undefined when presence controls are disabled', () => {
      const { disablePresenceControls } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disablePresenceControls.publish(true);

      const controls = whoIsOnlineComponent['getControls']({
        participantId: 'remoteParticipant123',
        presenceEnabled: true,
      });

      expect(controls).toBeUndefined();
    });

    test('should return controls for local participant', () => {
      const { disablePresenceControls } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disablePresenceControls.publish(false);

      const controls = whoIsOnlineComponent['getControls']({
        participantId: MOCK_LOCAL_PARTICIPANT.id,
        presenceEnabled: true,
      });

      expect(controls).toEqual([
        { label: 'gather all', icon: 'gather' },
        { icon: 'send', label: 'everyone follows me' },
        { icon: 'eye', label: 'private mode' },
      ]);
    });

    test('should return controls for other participants', () => {
      const { disablePresenceControls } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disablePresenceControls.publish(false);

      const getOtherParticipantsControlsMock = jest.fn().mockReturnValue([
        { label: 'gather all', icon: 'gather' },
        { icon: 'send', label: 'everyone follows me' },
        { icon: 'eye', label: 'private mode' },
      ]);

      const controls = whoIsOnlineComponent['getControls']({
        participantId: 'remoteParticipant456',
        presenceEnabled: true,
      });

      expect(controls).toEqual([
        { icon: 'place', label: 'go to' },
        { label: 'follow', icon: 'send' },
      ]);
    });
  });

  describe('getOtherParticipantsControls', () => {
    test('should return controls without "Go To" option when disableGoToParticipant is true', () => {
      const { disableGoToParticipant, disableFollowParticipant, following } = whoIsOnlineComponent[
        'useStore'
      ](StoreType.WHO_IS_ONLINE);
      disableGoToParticipant.publish(true);
      disableFollowParticipant.publish(false);
      following.publish(undefined);

      const controls = whoIsOnlineComponent['getOtherParticipantsControls']('participant123');

      expect(controls).toEqual([
        {
          label: 'follow',
          icon: 'send',
        },
      ]);
    });

    test('should return controls with "Go To" option when disableGoToParticipant is false', () => {
      const { disableGoToParticipant, disableFollowParticipant, following } = whoIsOnlineComponent[
        'useStore'
      ](StoreType.WHO_IS_ONLINE);
      disableGoToParticipant.publish(false);
      disableFollowParticipant.publish(false);
      following.publish(undefined);

      const controls = whoIsOnlineComponent['getOtherParticipantsControls']('participant123');

      expect(controls).toEqual([
        {
          label: 'go to',
          icon: 'place',
        },
        {
          label: 'follow',
          icon: 'send',
        },
      ]);
    });

    test('should return controls for when following a participant', () => {
      const { disableGoToParticipant, disableFollowParticipant, following } = whoIsOnlineComponent[
        'useStore'
      ](StoreType.WHO_IS_ONLINE);
      disableGoToParticipant.publish(false);
      disableFollowParticipant.publish(false);
      following.publish({ color: 'red', id: 'participant123', name: 'name' });

      const controls = whoIsOnlineComponent['getOtherParticipantsControls']('participant123');

      expect(controls).toEqual([
        {
          label: 'go to',
          icon: 'place',
        },
        {
          label: 'unfollow',
          icon: 'send-off',
        },
      ]);
    });

    test('should return controls when disableFollowParticipant is true', () => {
      const { disableGoToParticipant, disableFollowParticipant, following } = whoIsOnlineComponent[
        'useStore'
      ](StoreType.WHO_IS_ONLINE);
      disableGoToParticipant.publish(false);
      disableFollowParticipant.publish(true);
      following.publish(undefined);

      const controls = whoIsOnlineComponent['getOtherParticipantsControls']('participant123');

      expect(controls).toEqual([
        {
          label: 'go to',
          icon: 'place',
        },
      ]);
    });
  });

  describe('getLocalParticipantControls', () => {
    test('should return controls without "Gather" option when disableGatherAll is true', () => {
      const {
        disableFollowMe,
        disableGatherAll,
        disablePrivateMode,
        everyoneFollowsMe,
        privateMode,
      } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disableFollowMe.publish(false);
      disableGatherAll.publish(true);
      disablePrivateMode.publish(false);
      everyoneFollowsMe.publish(false);
      privateMode.publish(false);

      const controls = whoIsOnlineComponent['getLocalParticipantControls']();

      expect(controls).toEqual([
        {
          label: 'everyone follows me',
          icon: 'send',
        },
        {
          label: 'private mode',
          icon: 'eye',
        },
      ]);
    });

    test('should return controls with "Unfollow" and "Leave Private" options when everyoneFollowsMe and privateMode are true', () => {
      const {
        disableFollowMe,
        disableGatherAll,
        disablePrivateMode,
        everyoneFollowsMe,
        privateMode,
      } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disableFollowMe.publish(false);
      disableGatherAll.publish(false);
      disablePrivateMode.publish(false);
      everyoneFollowsMe.publish(true);
      privateMode.publish(true);

      const controls = whoIsOnlineComponent['getLocalParticipantControls']();

      expect(controls).toEqual([
        {
          icon: 'gather',
          label: 'gather all',
        },
        {
          icon: 'send-off',
          label: 'stop followers',
        },
        {
          icon: 'eye_inative',
          label: 'leave private mode',
        },
      ]);
    });

    test('should return controls with "Follow" and "Private" options when all flags are false', () => {
      const {
        disableFollowMe,
        disableGatherAll,
        disablePrivateMode,
        everyoneFollowsMe,
        privateMode,
      } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disableFollowMe.publish(false);
      disableGatherAll.publish(false);
      disablePrivateMode.publish(false);
      everyoneFollowsMe.publish(false);
      privateMode.publish(false);

      const controls = whoIsOnlineComponent['getLocalParticipantControls']();

      expect(controls).toEqual([
        {
          label: 'gather all',
          icon: 'gather',
        },
        {
          label: 'everyone follows me',
          icon: 'send',
        },
        {
          label: 'private mode',
          icon: 'eye',
        },
      ]);
    });

    test('should return controls without "Follow" option when disableFollowMe is true', () => {
      const {
        disableFollowMe,
        disableGatherAll,
        disablePrivateMode,
        everyoneFollowsMe,
        privateMode,
      } = whoIsOnlineComponent['useStore'](StoreType.WHO_IS_ONLINE);
      disableFollowMe.publish(true);
      disableGatherAll.publish(false);
      disablePrivateMode.publish(false);
      everyoneFollowsMe.publish(false);
      privateMode.publish(false);

      const controls = whoIsOnlineComponent['getLocalParticipantControls']();

      expect(controls).toEqual([
        {
          label: 'gather all',
          icon: 'gather',
        },
        {
          label: 'private mode',
          icon: 'eye',
        },
      ]);
    });
  });

  describe('highlightParticipantBeingFollowed', () => {
    test('should put participant being followed from extras in second position over all', () => {
      const participant1 = {
        activeComponents: [],
        avatar: {} as Avatar,
        id: 'test id 1',
        isLocalParticipant: false,
        name: 'participant',
        tooltip: {} as TooltipData,
        controls: {} as any,
        disableDropdown: false,
      };

      const participant2 = { ...participant1, id: 'test id 2' };
      const participant3 = { ...participant1, id: 'test id 3' };
      const participant4 = { ...participant1, id: 'test id 4' };
      const participant5 = { ...participant1, id: 'test id 5' };

      const participantsList: Participant[] = [
        participant1,
        participant2,
        participant3,
        participant4,
      ];

      const { participants, extras, following } = whoIsOnlineComponent['useStore'](
        StoreType.WHO_IS_ONLINE,
      );

      participants.publish(participantsList);
      extras.publish([participant5]);
      following.publish({
        color: 'red',
        id: 'test id 5',
        name: 'participant 5',
      });

      expect(participants.value[0]).toBe(participant1);
      expect(participants.value[1]).toBe(participant2);
      expect(participants.value[2]).toBe(participant3);
      expect(participants.value[3]).toBe(participant4);
      expect(extras.value[0]).toBe(participant5);

      whoIsOnlineComponent['highlightParticipantBeingFollowed']();

      expect(participants.value[0]).toBe(participant1);
      expect(participants.value[1]).toBe(participant5);
      expect(participants.value[2]).toBe(participant2);
      expect(participants.value[3]).toBe(participant3);
      expect(extras.value[0]).toBe(participant4);
    });
  });
});
