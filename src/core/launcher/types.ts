import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { Observable } from '../../common/utils';
import { BaseComponent } from '../../components/base';

export interface DefaultLauncher {}

export interface LauncherOptions
  extends Omit<SuperVizSdkOptions, 'environment' | 'debug' | 'roomId'> {}

export interface LauncherFacade {
  subscribe: typeof Observable.prototype.subscribe;
  unsubscribe: typeof Observable.prototype.unsubscribe;
  addComponent: (component: BaseComponent) => void;
  removeComponent: (component: BaseComponent) => void;
}
