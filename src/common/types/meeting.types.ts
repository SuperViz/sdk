import { SuperVizSdkOptions } from './sdk-options.types';

export interface StartMeetingOptions extends Omit<SuperVizSdkOptions, 'debug'> {}
