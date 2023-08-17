import '../../components';

const element = document.createElement('superviz-comments-comment-input');
document.body.appendChild(element);

describe('CommentsCommentInput', () => {
  test('renders a textarea and a send button', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-input')[0];
    const textarea = renderedElement.shadowRoot?.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = renderedElement.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(textarea).toBeDefined();
    expect(sendButton).toBeDefined();
  });

  test('disables the send button when the textarea is empty', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-input')[0];

    const sendButton = renderedElement.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(sendButton.disabled).toBe(true);
  });

  test('enables the send button when the textarea has text', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-input')[0];

    const textarea = renderedElement.shadowRoot?.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = renderedElement.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    expect(sendButton.disabled).toBe(false);
  });

  test('emits an event when the send button is clicked', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments-comment-input')[0];
    const textarea = renderedElement.shadowRoot?.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = renderedElement.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    const eventSpy = jest.fn();

    renderedElement.setAttribute('eventType', 'send');
    renderedElement.addEventListener('send', eventSpy);

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    sendButton.click();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
