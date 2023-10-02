import sleep from '../../../common/utils/sleep';
import '.';

let element: HTMLElement;

describe('CommentsAnnotations', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments-annotations');
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the add comment button', async () => {
    const button = element.shadowRoot!.querySelector(
      '.annotations--add-comment-btn',
    ) as HTMLSpanElement;

    expect(button).toBeDefined();
    expect(button.textContent).toEqual('Click anywhere to add a comment');
  });

  test('renders the comment input', async () => {
    const commentInput = element.shadowRoot!.querySelector(
      'superviz-comments-comment-input',
    ) as HTMLElement;
    expect(commentInput).toBeDefined();
  });

  test('emits an event when the comment input is submitted', async () => {
    const commentInput = element.shadowRoot!.querySelector(
      'superviz-comments-comment-input',
    ) as HTMLElement;

    const spy = jest.fn();
    element.addEventListener('create-annotation', spy);

    commentInput.dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: {
          text: 'test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledTimes(1);

    element.removeEventListener('create-comment', spy);
  });

  test('should listen event prepare-to-create-annotation', async () => {
    const spy = jest.fn();
    window.document.body.addEventListener('prepare-to-create-annotation', spy);
    element['emitEvent'] = jest.fn();

    window.document.body.dispatchEvent(
      new CustomEvent('prepare-to-create-annotation', {
        detail: {
          x: 100,
          y: 100,
          type: 'canvas',
        },
        composed: true,
        bubbles: true,
      }),
    );

    await sleep(1000);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(element['emitEvent']).toHaveBeenCalledTimes(1);
    expect(element['emitEvent']).toHaveBeenCalledWith('comment-input-focus', {
      x: 100,
      y: 100,
      type: 'canvas',
    });
  });
});
