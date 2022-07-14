import Communicator from './service/communicator/Communicator';

export default class SdkFacade {
  private communicator: Communicator;

  constructor(communicator: Communicator) {
    this.communicator = communicator;
  }

  destroy() {
    this.communicator.destroy();
  }
}
