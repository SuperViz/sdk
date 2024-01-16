import sleep from '../../../common/utils/sleep';
import '.';

let element: HTMLElement;

describe('CommentsCommentInput', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments-comment-input');
    element.setAttribute('eventType', 'create-annotation');
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders a textarea and a send button', async () => {
    const textarea = element.querySelector('#comment-input--textarea') as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    expect(textarea).toBeDefined();
    expect(sendButton).toBeDefined();
  });

  test('disables the send button when the textarea is empty', async () => {
    const sendButton = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    expect(sendButton.disabled).toBe(true);
  });

  test('enables the send button when the textarea has text', async () => {
    const textarea = element.shadowRoot!.querySelector(
      '#comment-input--textarea',
    ) as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    expect(sendButton.disabled).toBe(false);
  });

  test('emits an event when the send button is clicked', async () => {
    const textarea = element.shadowRoot!.querySelector(
      '#comment-input--textarea',
    ) as HTMLTextAreaElement;
    const sendButton = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    const spy = jest.fn();

    element.setAttribute('eventType', 'send');
    element.addEventListener('send', spy);

    textarea.value = 'test';
    textarea.dispatchEvent(new Event('input'));

    sendButton.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('emits an event when enter is pressed', async () => {
    const textarea = element.shadowRoot!.querySelector(
      '#comment-input--textarea',
    ) as HTMLTextAreaElement;
    textarea.value = 'test';

    const spy = jest.fn();
    element.setAttribute('eventType', 'send');
    element.addEventListener('send', spy);

    element.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('test custom props with text', async () => {
    element.setAttribute('text', 'test');

    await sleep();

    const textarea = element.shadowRoot!.querySelector(
      '#comment-input--textarea',
    ) as HTMLTextAreaElement;
    const btnSend = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    expect(textarea.value).toBe('test');
    expect(btnSend.disabled).toBe(false);
  });

  test('test custom props with btnActive', async () => {
    element.setAttributeNode(document.createAttribute('btnActive'));

    await sleep();

    const textarea = element.shadowRoot!.querySelector(
      '#comment-input--textarea',
    ) as HTMLTextAreaElement;
    const btnSend = element.shadowRoot!.querySelector(
      '.comment-input--send-btn',
    ) as HTMLButtonElement;

    expect(textarea.value).toBe('');
    expect(btnSend.disabled).toBe(false);
  });

  test('should close edit mode when close-edit-mode event is dispatched', async () => {
    const spy = jest.fn();

    element.addEventListener('close-edit-mode', spy);
    element.setAttributeNode(document.createAttribute('editable'));

    await sleep();

    const button = element.shadowRoot!.querySelector('#close') as HTMLButtonElement;

    button.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should change textarea elements classes when receiving focus', async () => {
    const textarea = element['commentInput'] as HTMLElement;
    const options = element['optionsContainer'] as HTMLElement;
    const rule = element['horizontalRule'] as HTMLElement;

    expect(options.classList.contains('active-textarea')).toBe(false);
    expect(rule.classList.contains('active-hr')).toBe(false);

    textarea.dispatchEvent(new CustomEvent('focus'));

    expect(options.classList.contains('active-textarea')).toBe(true);
    expect(rule.classList.contains('active-hr')).toBe(true);
  });

  test('should change textarea elements classes when losing focus and there is no text', async () => {
    const textarea = element['commentInput'] as HTMLElement;
    const options = element['optionsContainer'] as HTMLElement;
    const rule = element['horizontalRule'] as HTMLElement;

    element['optionsContainer'].classList.add('active-textarea');
    element['horizontalRule'].classList.add('active-hr');

    textarea.textContent = '';
    textarea.dispatchEvent(new CustomEvent('blur'));

    expect(options.classList.contains('active-textarea')).toBe(false);
    expect(rule.classList.contains('active-hr')).toBe(false);
  });

  test('should not change textarea elements classes when losing focus and there is no text', async () => {
    const textarea = element['commentInput'] as HTMLElement;
    const options = element['optionsContainer'] as HTMLElement;
    const rule = element['horizontalRule'] as HTMLElement;

    element['optionsContainer'].classList.add('active-textarea');
    element['horizontalRule'].classList.add('active-hr');

    textarea.textContent = 'text';
    textarea.dispatchEvent(new CustomEvent('blur'));

    expect(options.classList.contains('active-textarea')).toBe(true);
    expect(rule.classList.contains('active-hr')).toBe(true);
  });

  test('should set height to 40px if text goes back to having one line', () => {
    const textarea = element['commentInput'] as HTMLElement;

    textarea.textContent =
      'This is a text that has more than one line when typing it in the browser.';

    element['updateHeight']();

    const height = Number(textarea.style.height.slice(0, 2));
    expect(height).toBeGreaterThan(40);

    textarea.textContent = 'This is a text that has one line.';

    element['updateHeight']();

    expect(textarea.style.height).toBe('40px');
  });
});
