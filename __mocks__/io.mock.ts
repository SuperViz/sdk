import { jest } from '@jest/globals';

export const MOCK_IO = {
  PresenceEvents: {
    JOINED_ROOM: 'presence.joined-room',
    LEAVE: 'presence.leave',
    ERROR: 'presence.error',
    UPDATE: 'presence.update',
  },
  Realtime: class {
    connection;

    constructor(apiKey, environment, participant) {
      this.connection = {
        on: jest.fn(),
        off: jest.fn(),
      };
    }

    connect() {
      return {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
        disconnect: jest.fn(),
        history: jest.fn(),
        presence: {
          on: jest.fn(),
          off: jest.fn(),
          get: jest.fn(),
          update: jest.fn(),
        },
      };
    }

    destroy() {}
  },
};
