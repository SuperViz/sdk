import sleep from '../../../../common/utils/sleep';
import '../../components';

let element: HTMLElement;

describe('CommentsCommentInput', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments-comment-input');
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders a textarea and a send button', async () => {
    const textarea = element.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(textarea).toBeDefined();
    expect(sendButton).toBeDefined();
  });

  test('disables the send button when the textarea is empty', async () => {
    const sendButton = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(sendButton.disabled).toBe(true);
  });

  test('enables the send button when the textarea has text', async () => {
    const textarea = element.shadowRoot!.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    expect(sendButton.disabled).toBe(false);
  });

  test('emits an event when the send button is clicked', async () => {
    const textarea = element.shadowRoot!.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    const spy = jest.fn();

    element.setAttribute('eventType', 'send');
    element.addEventListener('send', spy);

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    sendButton.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('test custom props with text', async () => {
    element.setAttribute('text', 'test');

    await sleep();

    const textarea = element.shadowRoot!.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const btnSend = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(textarea.value).toBe('test');
    expect(btnSend.disabled).toBe(false);
  });

  test('test custom props with btnActive', async () => {
    element.setAttributeNode(document.createAttribute('btnActive'));

    await sleep();

    const textarea = element.shadowRoot!.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const btnSend = element.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

    expect(textarea.value).toBe('');
    expect(btnSend.disabled).toBe(false);
  });
});
