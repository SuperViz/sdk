import { PresenceMouseComponent } from './index';
import { MeetingEvent } from '../../common/types/events.types';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { ABLY_REALTIME_MOCK } from "../../../__mocks__/realtime.mock";

describe('PresenceMouseComponent', () => {
    let presenceMouseComponent: PresenceMouseComponent;

    beforeEach(() => {
        presenceMouseComponent = new PresenceMouseComponent();
        presenceMouseComponent['realtime'] = ABLY_REALTIME_MOCK;
        presenceMouseComponent['presenceMouseElement'] = document.createElement('superviz-presence-mouse')
        // @ts-ignore
        presenceMouseComponent['presenceMouseElement'].updatePresenceMouseParticipant = jest.fn();
        // @ts-ignore
        presenceMouseComponent['presenceMouseElement'].removePresenceMouseParticipant = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('start', () => {
        it('should subscribe to realtime events', () => {
            presenceMouseComponent['subscribeToRealtimeEvents'] = jest.fn();

            presenceMouseComponent['start']();

            expect(presenceMouseComponent['subscribeToRealtimeEvents']).toHaveBeenCalled();
        });
    });

    describe('destroy', () => {
        it('should publish DESTROY event and unsubscribe from realtime events', () => {
            presenceMouseComponent['publish'] = jest.fn();
            presenceMouseComponent['unsubscribeFromRealtimeEvents'] = jest.fn();

            presenceMouseComponent['destroy']();

            expect(presenceMouseComponent['publish']).toHaveBeenCalledWith(MeetingEvent.DESTROY);
            expect(presenceMouseComponent['unsubscribeFromRealtimeEvents']).toHaveBeenCalled();
        });

        it('should remove event listener and remove presence mouse element from container', () => {
            const presenceContainerId = document.createElement('div');
            presenceMouseComponent['containerId'] = 'container';
            document.getElementById = jest.fn().mockReturnValue(presenceContainerId);

            const removeEventListenerSpy = jest.spyOn(presenceContainerId, 'removeEventListener');
            const removeChildSpy = jest.spyOn(presenceContainerId, 'removeChild');

            presenceMouseComponent['containerId'] = 'container';

            presenceContainerId.appendChild(presenceMouseComponent['presenceMouseElement']);

            presenceMouseComponent['destroy']();

            expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', presenceMouseComponent['onMyParticipantMouseMove']);
            expect(removeChildSpy).toHaveBeenCalledWith(presenceMouseComponent['presenceMouseElement']);
        });
    });

    describe('subscribeToRealtimeEvents', () => {
        it('should subscribe to realtime events', () => {
            const participantJoinedObserverSubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantJoinedObserver, 'subscribe');
            const participantLeaveObserverSubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantLeaveObserver, 'subscribe');
            const participantsObserverSubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantsObserver, 'subscribe');

            presenceMouseComponent['subscribeToRealtimeEvents']();

            expect(participantJoinedObserverSubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantJoinedOnRealtime']);
            expect(participantLeaveObserverSubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantLeftOnRealtime']);
            expect(participantsObserverSubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantsDidChange']);
        });
    });

    describe('unsubscribeFromRealtimeEvents', () => {
        it('should unsubscribe from realtime events', () => {
            const participantJoinedObserverUnsubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantJoinedObserver, 'unsubscribe');
            const participantLeaveObserverUnsubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantLeaveObserver, 'unsubscribe');
            const participantsObserverUnsubscribeSpy = jest.spyOn(presenceMouseComponent['realtime'].participantsObserver, 'unsubscribe');

            presenceMouseComponent['unsubscribeFromRealtimeEvents']();

            expect(participantJoinedObserverUnsubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantJoinedOnRealtime']);
            expect(participantLeaveObserverUnsubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantLeftOnRealtime']);
            expect(participantsObserverUnsubscribeSpy).toHaveBeenCalledWith(presenceMouseComponent['onParticipantsDidChange']);
        });
    });

    describe('onMyParticipantMouseMove', () => {
        it('should update my participant mouse position', () => {
            const updateMyPropertiesSpy = jest.spyOn(presenceMouseComponent['realtime'], 'updateMyProperties');
            const presenceContainerId = document.createElement('div');
            presenceMouseComponent['containerId'] = 'container';
            document.getElementById = jest.fn().mockReturnValue(presenceContainerId);

            const event = { x: 10, y: 20 };
            presenceMouseComponent['onMyParticipantMouseMove'](event);

            expect(updateMyPropertiesSpy).toHaveBeenCalledWith({
                mousePositionX: event.x,
                mousePositionY: event.y,
                originalWidth: 0,
                originalHeight: 0,
                containerId: 'container',
            });
        });
    });

    describe('onParticipantsDidChange', () => {
        it('should update presence mouse element for external participants', () => {
            // @ts-ignore
            const updatePresenceMouseParticipantSpy = jest.spyOn(presenceMouseComponent['presenceMouseElement'], 'updatePresenceMouseParticipant');

            const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
                clientId: 'MOCK_LOCAL_PARTICIPANT.id',
                action: 'present',
                connectionId: 'connection1',
                encoding: 'h264',
                id: 'unit-test-participant1-ably-id',
                timestamp: new Date().getTime(),
                data: {
                    participantId: 'MOCK_LOCAL_PARTICIPANT.id',
                    mousePositionX: 1,
                    slotIndex: 0,
                },
            }

            const participant2 = MOCK_ABLY_PARTICIPANT
            participant2.id = 'unit-test-participant2-ably-id'
            participant2.data.participantId = 'participant2-id'

            const participants: Record<string, AblyParticipant> = {
                participant: MOCK_ABLY_PARTICIPANT,
                participant2: participant2,
            };

            presenceMouseComponent['localParticipant'] = { id: 'unit-test-participant1-ably-id' };

            presenceMouseComponent['onParticipantsDidChange'](participants);

            expect(updatePresenceMouseParticipantSpy).toHaveBeenCalledWith(participant2.data);
        });
    });

    describe('onParticipantJoinedOnRealtime', () => {
        it('should create presence mouse element and add event listener', () => {
            const presenceContainerId = document.createElement('div');
            presenceMouseComponent['containerId'] = 'container';

            const appendChildSpy = jest.spyOn(presenceContainerId, 'appendChild');
            const addEventListenerSpy = jest.spyOn(presenceContainerId, 'addEventListener');

            document.getElementById = jest.fn().mockReturnValue(presenceContainerId);

            const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
                clientId: 'MOCK_LOCAL_PARTICIPANT.id',
                action: 'present',
                connectionId: 'connection1',
                encoding: 'h264',
                id: 'unit-test-participant-ably-id',
                timestamp: new Date().getTime(),
                data: {
                    id: 'unit-test-participant-ably-id',
                    slotIndex: 0,
                },
            }

            presenceMouseComponent['localParticipant'] = { id: 'unit-test-participant-ably-id' };

            presenceMouseComponent['onParticipantJoinedOnRealtime'](MOCK_ABLY_PARTICIPANT);

            expect(appendChildSpy).toHaveBeenCalledWith(presenceMouseComponent['presenceMouseElement']);
            expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', presenceMouseComponent['onMyParticipantMouseMove']);
        });
    });

    describe('onParticipantLeftOnRealtime', () => {
        it('should remove presence mouse participant', () => {
            // @ts-ignore
            const removePresenceMouseParticipantSpy = jest.spyOn(presenceMouseComponent['presenceMouseElement'], 'removePresenceMouseParticipant');

            const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
                clientId: 'MOCK_LOCAL_PARTICIPANT.id',
                action: 'present',
                connectionId: 'connection1',
                encoding: 'h264',
                id: 'unit-test-participant1-ably-id',
                timestamp: new Date().getTime(),
                data: {
                    participantId: 'MOCK_LOCAL_PARTICIPANT.id',
                    slotIndex: 0,
                },
            }

            presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_ABLY_PARTICIPANT);

            expect(removePresenceMouseParticipantSpy).toHaveBeenCalledWith(MOCK_ABLY_PARTICIPANT.clientId);
        });
    });
});