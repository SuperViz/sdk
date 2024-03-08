import { SlotService } from '.';

describe('slot service', () => {
  it('should assign a slot to the participant', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback({
            presences: [],
          });
        }),
        update: jest.fn(),
      },
    } as any;

    const participant = {
      id: '123',
    } as any;

    const instance = new SlotService(room, participant);
    await instance['assignSlot']();

    expect(instance['slotIndex']).toBeDefined();
    expect(instance['participant'].slot).toBeDefined();
    expect(room.presence.update).toHaveBeenCalledWith({
      slot: expect.objectContaining({
        index: expect.any(Number),
        color: expect.any(String),
        textColor: expect.any(String),
        colorName: expect.any(String),
        timestamp: expect.any(Number),
      }),
    });
  });

  it('should assign a slot to the participant', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback({
            presences: [],
          });
        }),
        update: jest.fn(),
      },
    } as any;

    const participant = {
      id: '123',
    } as any;

    const instance = new SlotService(room, participant);
    await instance['assignSlot']();

    expect(instance['slotIndex']).toBeDefined();
    expect(instance['participant'].slot).toBeDefined();
    expect(room.presence.update).toHaveBeenCalledWith({
      slot: expect.objectContaining({
        index: expect.any(Number),
        color: expect.any(String),
        textColor: expect.any(String),
        colorName: expect.any(String),
        timestamp: expect.any(Number),
      }),
    });
  });

  it('if there are no more slots available, it should throw an error', async () => {
    console.error = jest.fn();

    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback({
            presences: new Array(16).fill({}),
          });
        }),
        update: jest.fn(),
      },
    } as any;

    const participant = {
      id: '123',
    } as any;

    const instance = new SlotService(room, participant);
    await instance['assignSlot']();

    expect(instance['slotIndex']).toBeUndefined();
    expect(instance['participant'].slot).toBeUndefined();
  });

  it('if the slot is already in use, it should assign a new slot', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback({
            presences: [
              {
                data: {
                  slot: {
                    index: 0,
                  },
                },
              },
            ],
          });
        }),
        update: jest.fn(),
      },
    } as any;

    const mockMath = Object.create(global.Math);
    mockMath.random = jest.fn().mockReturnValueOnce(0).mockReturnValueOnce(1);
    global.Math = mockMath;

    const participant = {
      id: '123',
    } as any;

    const instance = new SlotService(room, participant);
    await instance['assignSlot']();

    expect(instance['slotIndex']).toBeDefined();
    expect(instance['participant'].slot).toBeDefined();
    expect(room.presence.update).toHaveBeenCalledWith({
      slot: expect.objectContaining({
        index: expect.any(Number),
        color: expect.any(String),
        textColor: expect.any(String),
        colorName: expect.any(String),
        timestamp: expect.any(Number),
      }),
    });
  });
});
