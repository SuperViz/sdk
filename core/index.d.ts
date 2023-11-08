import { SuperVizSdkOptions } from '../common/types/sdk-options.types';
import { LauncherFacade as LauncherFacadeType } from './launcher/types';
/**
 * @function init
 * @description Initialize the SDK
 * @param apiKey - API key
 * @param options - SDK options
 * @returns {LauncherFacadeType}
 */
declare const init: (apiKey: string, options: SuperVizSdkOptions) => Promise<LauncherFacadeType>;
export default init;
