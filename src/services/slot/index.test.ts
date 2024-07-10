import { SlotService } from '.';
import { MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { MEETING_COLORS, MEETING_COLORS_KEYS } from '../../common/types/meeting-colors.types';
import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';
import { ComponentNames } from '../../components/types';

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

    const instance = new SlotService(room, useStore);
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

  test('should remove the slot from the participant', async () => {
    const room = {
      presence: {
        on: jest.fn(),
        update: jest.fn(),
      },
    } as any;

    const instance = new SlotService(room, useStore);
    instance['slotIndex'] = 0;
    instance.setDefaultSlot();

    expect(instance['slotIndex']).toBeNull();
    expect(room.presence.update).toHaveBeenCalledWith({
      slot: {
        index: null,
        color: expect.any(String),
        textColor: expect.any(String),
        colorName: expect.any(String),
        timestamp: expect.any(Number),
      },
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

    const instance = new SlotService(room, useStore);
    await instance.assignSlot();

    expect(instance['slotIndex']).toBeNull();
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

    const instance = new SlotService(room, useStore);
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

  test("should remove the slot from the participant when the participant don't need it anymore", async () => {
    const room = {
      presence: {
        on: jest.fn(),
        update: jest.fn(),
      },
    } as any;

    const instance = new SlotService(room, useStore);
    instance['slotIndex'] = 0;

    const event: Participant = {
      ...MOCK_LOCAL_PARTICIPANT,
      slot: {
        index: 0,
        color: MEETING_COLORS.turquoise,
        colorName: MEETING_COLORS_KEYS[0],
        textColor: '#000',
        timestamp: 0,
      },
      activeComponents: [],
    };

    const { localParticipant } = useStore(StoreType.GLOBAL);
    localParticipant.publish(event);

    expect(room.presence.update).toHaveBeenCalledWith({
      slot: {
        index: null,
        color: expect.any(String),
        textColor: expect.any(String),
        colorName: expect.any(String),
        timestamp: expect.any(Number),
      },
    });
  });
});
