import { MeetingEvent, RealtimeEvent, DeviceEvent, MeetingState, MeetingConnectionStatus, MeetingControlsEvent, ParticipantEvent } from './common/types/events.types';
import { Participant, Group, Avatar, ParticipantType } from './common/types/participant.types';
import { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
import { BrowserService } from './services/browser';
import { BrowserStats } from './services/browser/types';
import { PluginOptions } from './services/communicator/types';
import { PluginMethods, Plugin } from './services/integration/base-plugin/types';
import { ParticipantOn3D, ParticipantTo3D } from './services/integration/participants/types';
import { RealtimeMessage } from './services/realtime/ably/types';
import { SuperVizSdk } from './types';
/**
 * @function init
 * @description Initialize the SDK
 * @param apiKey - API key
 * @param options - SDK options
 * @returns {SuperVizSdk}
 */
declare const init: (apiKey: string, options: SuperVizSdkOptions) => Promise<SuperVizSdk>;
export default init;
export { MeetingEvent, RealtimeEvent, SuperVizSdkOptions, DeviceEvent, SuperVizSdk, MeetingState, Participant, ParticipantType, Group, MeetingConnectionStatus, PluginMethods, PluginOptions, Plugin, ParticipantOn3D, ParticipantTo3D, BrowserService, BrowserStats, Avatar, MeetingControlsEvent, DevicesOptions, RealtimeMessage, ParticipantEvent, };
