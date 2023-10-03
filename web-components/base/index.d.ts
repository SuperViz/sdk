import { LitElement } from 'lit';
import { Constructor, WebComponentsBaseInterface } from './types';
export declare const WebComponentsBase: <T extends Constructor<LitElement>>(superClass: T) => Constructor<WebComponentsBaseInterface> & T;
