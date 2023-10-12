import { CommentsComponent, PresenceMouseComponent, Realtime, VideoComponent } from '../../components';
import { LauncherFacade } from '../../core/launcher/types';
import { LayoutMode } from '../../services/video-conference-manager/types';
import { DeviceEvent, MeetingEvent, RealtimeEvent, MeetingState, MeetingConnectionStatus, MeetingControlsEvent, ParticipantEvent, FrameEvent } from './events.types';
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
    FrameEvent: typeof FrameEvent;
    LayoutMode: typeof LayoutMode;
    VideoComponent: typeof VideoComponent;
    PresenceMouseComponent: typeof PresenceMouseComponent;
    Realtime: typeof Realtime;
    CommentsComponent: typeof CommentsComponent;
}
