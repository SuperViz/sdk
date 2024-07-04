import { SlotService } from '.';

describe('slot service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should assign a slot to the participant', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback([]);
        }),
        update: jest.fn(),
      },
    } as any;

    const participant = {
      id: '123',
    } as any;

    const instance = new SlotService(room);
    const result = await instance.assignSlot();

    expect(instance['slotIndex']).toBeDefined();
    expect(result).toEqual({
      index: expect.any(Number),
      color: expect.any(String),
      textColor: expect.any(String),
      colorName: expect.any(String),
      timestamp: expect.any(Number),
    });
  });

  test('if there are no more slots available, it should throw an error', async () => {
    console.error = jest.fn();

    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback(new Array(50).fill({}));
        }),
        update: jest.fn(),
      },
    } as any;

    const instance = new SlotService(room);
    await instance.assignSlot();

    expect(instance['slotIndex']).toBeUndefined();
  });

  test('if the slot is already in use, it should assign a new slot', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        get: jest.fn((callback) => {
          callback([
            {
              data: {
                slot: {
                  index: 0,
                },
              },
            },
          ]);
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

    const instance = new SlotService(room);
    const result = await instance.assignSlot();

    expect(instance['slotIndex']).toBeDefined();
    expect(result).toEqual({
      index: expect.any(Number),
      color: expect.any(String),
      textColor: expect.any(String),
      colorName: expect.any(String),
      timestamp: expect.any(Number),
    });
  });
});
