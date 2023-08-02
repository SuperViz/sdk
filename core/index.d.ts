import { SuperVizSdkOptions } from '../common/types/sdk-options.types';
import { SuperVizSdk } from '../types';
/**
 * @function init
 * @description Initialize the SDK
 * @param apiKey - API key
 * @param options - SDK options
 * @returns {SuperVizSdk}
 */
declare const init: (apiKey: string, options: SuperVizSdkOptions) => Promise<SuperVizSdk>;
export default init;
