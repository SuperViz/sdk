import { DateTime } from 'luxon';

import sleep from '../../../../common/utils/sleep';

import '../../components';

const element = document.createElement('superviz-comments-comment-item');
document.body.appendChild(element);

element.setAttribute('avatar', 'https://example.com/avatar.png');
element.setAttribute('username', 'John Doe');
element.setAttribute('text', 'This is a comment');
element.setAttribute('createdAt', DateTime.now().toISO() as string);
element.setAttributeNode(document.createAttribute('resolvable'));

describe('CommentsCommentItem', () => {
  test('renders the comment item with correct properties', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];

    const avatar = renderedElement.shadowRoot!.querySelector('.comment-item__avatar img') as HTMLImageElement;
    expect(avatar.src).toEqual('https://example.com/avatar.png');

    const username = renderedElement.shadowRoot!.querySelector('.comment-item__user .text-bold') as HTMLSpanElement;
    expect(username.textContent).toEqual('John Doe');

    const createdAt = renderedElement.shadowRoot!.querySelector('.comment-item__user .text-small') as HTMLSpanElement;
    expect(createdAt.textContent).toEqual(DateTime.now().toFormat('yyyy-dd-MM'));

    const text = renderedElement.shadowRoot!.querySelector('.comment-item__content .text-big') as HTMLSpanElement;
    expect(text.textContent).toEqual('This is a comment');
  });

  test('resolves the annotation when the comment is unresolved', async () => {
    await sleep();

    const renderedElement = document.getElementsByTagName('superviz-comments-comment-item')[0];
    const resolveButton = renderedElement.shadowRoot!.querySelector('.comment-item__resolve > button') as HTMLButtonElement;

    resolveButton.click();

    await sleep();

    expect(element['resolved']).toBe('true');
  });
});
