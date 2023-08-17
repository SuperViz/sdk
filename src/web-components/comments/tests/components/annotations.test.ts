import '../../components';

const element = document.createElement('superviz-comments-annotations');
document.body.appendChild(element);

describe('CommentsAnnotations', () => {
  test('renders the add comment button', async () => {
    const button = element.shadowRoot!.querySelector('.add-comment-btn') as HTMLSpanElement;
    expect(button).toBeDefined();
    expect(button.textContent).toEqual('Click anywhere to add a comment');
  });
});
