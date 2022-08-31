import { SuperVizCdn } from './common/types/cdn.types';

declare global {
  interface Window {
    SuperVizSdk: SuperVizCdn;
  }
}
