import { PresenceMouseComponent, VideoComponent } from '../../components';
import { LauncherFacade } from '../../core/launcher/types';
import { DeviceEvent, MeetingEvent, RealtimeEvent, MeetingState, MeetingConnectionStatus, MeetingControlsEvent, ParticipantEvent } from './events.types';
import { SuperVizSdkOptions } from './sdk-options.types';
export interface SuperVizCdn {
    init: (apiKey: string, options: SuperVizSdkOptions) => Promise<LauncherFacade>;
    MeetingEvent: typeof MeetingEvent;
    RealtimeEvent: typeof RealtimeEvent;
    DeviceEvent: typeof DeviceEvent;
    MeetingState: typeof MeetingState;
    MeetingConnectionStatus: typeof MeetingConnectionStatus;
    MeetingControlsEvent: typeof MeetingControlsEvent;
    ParticipantEvent: typeof ParticipantEvent;
    VideoComponent: typeof VideoComponent;
    PresenceMouseComponent: typeof PresenceMouseComponent;
}
