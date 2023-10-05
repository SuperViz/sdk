export const MOCK_ANNOTATION = {
  uuid: 'any_uuid',
  position: JSON.stringify({
    x: 100,
    y: 100,
    type: 'canvas',
  }),
  resolved: false,
  waterMark: {
    ALL: 'all',
  },
  comments: [
    {
      uuid: 'any_uuid',
      username: 'any_username',
      avatar: 'any_avatar',
      text: 'any_text',
      createdAt: new Date().toISOString(),
    },
    {
      uuid: 'any_uuid 2',
      username: 'any_username 2',
      avatar: 'any_avatar 2',
      text: 'any_text 2',
      createdAt: new Date().toISOString(),
    },
  ],
};
