import { SuperVizSdk } from '../../services/communicator/types';
import { DeviceEvent, MeetingEvent, RealtimeEvent, MeetingState, MeetingConnectionStatus, MeetingControlsEvent } from './events.types';
import { SuperVizSdkOptions } from './sdk-options.types';
export interface SuperVizCdn {
    init: (apiKey: string, options: SuperVizSdkOptions) => Promise<SuperVizSdk>;
    MeetingEvent: typeof MeetingEvent;
    RealtimeEvent: typeof RealtimeEvent;
    DeviceEvent: typeof DeviceEvent;
    MeetingState: typeof MeetingState;
    MeetingConnectionStatus: typeof MeetingConnectionStatus;
    MeetingControlsEvent: typeof MeetingControlsEvent;
}
