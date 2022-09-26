import { Adapter, Adapters, AdapterType } from '../base-adapter/types';

// @NOTE - remove this mock when a first adapter is implemented
export class MatterportMockAdapter {
  constructor() {
    console.log('Hello from matteport adapter');
  }

  get type(): AdapterType {
    return Adapters.MATTERPORT;
  }
}
