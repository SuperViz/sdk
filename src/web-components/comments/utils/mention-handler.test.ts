import * as mentionHandler from './mention-handler';

describe('Mention Handler', () => {
  test('test', () => {
    console.log(mentionHandler.addMention(
      {
        text: "Hello {{Joe}}, how are you? You can call me {{Jane}}.",
        mentions: [
          {
            userId: "Joe",
            name: "Joe Doe"
          },
          {
            userId: "Jane",
            name: "Jane Doe"
          }
        ]
      } as any))
  });
});
