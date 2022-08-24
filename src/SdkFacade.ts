import Communicator from './services/communicator';

export default class SdkFacade {
  private communicator: Communicator;

  constructor(communicator: Communicator) {
    this.communicator = communicator;
  }

  setSyncProperty = (property: {}) => {
    this.communicator.setSyncProperties(property);
  };

  subscribe = (property: string, listener: Function) => {
    this.communicator.subscribe(property, listener);
  };

  unsubscribe = (property: string) => {
    this.communicator.unsubscribe(property);
  };

  destroy() {
    this.communicator.destroy();
  }
}
