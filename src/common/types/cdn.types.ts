import { CommunicatorFacade } from '../../services/communicator/types';
import { FrameSizeType } from '../../services/video-conference-manager/types';

import { DevicesMessageTypes, MessageTypes } from './messages.types';
import { SuperVizSdkOptions } from './sdk-options.types';

export interface SuperVizCdn {
  start: (apiKey: string, options: SuperVizSdkOptions) => Promise<CommunicatorFacade>;
  MessageTypes: typeof MessageTypes;
  FrameSizeType: typeof FrameSizeType;
  DevicesMessageTypes: typeof DevicesMessageTypes;
}
