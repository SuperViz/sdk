import { jest } from '@jest/globals';

export const MOCK_IO = {
  Realtime: class {
    public connection: {
      on: (state: string) => void;
      off: () => void;
    };

    constructor(apiKey: string, environment: string, participant: any) {
      this.connection = {
        on: jest.fn(),
        off: jest.fn(),
      };
    }

    public connect() {
      return {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      };
    }

    public destroy() {}
  },
};
