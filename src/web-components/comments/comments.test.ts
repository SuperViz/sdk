import '.';
import { MOCK_ANNOTATION } from '../../../__mocks__/comments.mock';
import sleep from '../../common/utils/sleep';

let element: HTMLElement;

describe('comments', () => {
  beforeEach(async () => {
    element = document.createElement('superviz-comments');
    element.setAttribute('comments', JSON.stringify([]));
    document.body.appendChild(element);
    await sleep();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('renders the component', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    expect(renderedElement).toBeTruthy();
  });

  test('should close superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot!.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));
    renderedElement.removeAttribute('open');

    expect(renderedElement.hasAttribute('open')).toBeFalsy();
    expect(app?.classList.contains('container-close')).toBeTruthy();
  });

  test('should open superviz comments', async () => {
    const renderedElement = document.getElementsByTagName('superviz-comments')[0];
    const app = renderedElement.shadowRoot!.getElementById('superviz-comments');

    renderedElement.setAttributeNode(document.createAttribute('open'));

    await sleep();

    expect(renderedElement.hasAttribute('open')).toBeTruthy();
    expect(app?.classList.contains('container')).toBe(true);
  });

  test('should add annotations', async () => {
    const annotation = {
      uuid: 'any_uuid',
      position: 'any_position',
      resolved: false,
      comments: [
        {
          uuid: 'any_uuid',
          username: 'any_username',
          avatar: 'any_avatar',
          text: 'any_text',
          createdAt: new Date().toISOString(),
        },
      ],
    };

    element['addAnnotation']([annotation]);

    expect(element['annotations']).toEqual([annotation]);
  });

  test('should toggle superviz comments', async () => {
    const isOpen = element['open'];
    element['toggle']();

    await sleep();

    expect(element['open']).toEqual(!isOpen);
  });

  test('should update annotation', async () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      position: 'any_position',
    };

    element['addAnnotation']([annotation]);

    const annotationUpdated = {
      ...MOCK_ANNOTATION,
      position: 'any_position_updated',
    };

    element['updateAnnotations']([annotationUpdated]);

    expect(element['annotations']).toEqual([annotationUpdated]);
  });

  test('should add comment', async () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      position: 'any_position',
    };

    element['addAnnotation']([annotation]);

    const comment = {
      uuid: 'teste',
      username: 'any_username',
      avatar: 'any_avatar',
      text: 'any_text',
      createdAt: new Date().toISOString(),
    };

    element['addComment'](annotation.uuid, comment);

    const lastComment = element['annotations'][0].comments.at(-1);

    expect(lastComment).toEqual(comment);
  });

  test('should return void when annotation is not found', async () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      position: 'any_position',
    };

    element['addAnnotation']([annotation]);

    const comment = {
      uuid: 'teste',
      username: 'any_username',
      avatar: 'any_avatar',
      text: 'any_text',
      createdAt: new Date().toISOString(),
    };

    element['addComment']('other_annotation_id', comment);

    expect(element['annotations'][0].comments.length).toEqual(2);
  });

  test('should delete comment', async () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      position: 'any_position',
    };

    element['addAnnotation']([annotation]);

    const newComment = {
      uuid: 'teste',
      username: 'any_username',
      avatar: 'any_avatar',
      text: 'any_text',
      createdAt: new Date().toISOString(),
    };

    element['addComment'](annotation.uuid, newComment);

    const commentId = () => element['annotations'][0].comments.find((comment) => comment.uuid === newComment.uuid)?.uuid;
    expect(commentId()).toBeTruthy();

    element['deleteComment'](newComment.uuid);

    expect(commentId()).toBeFalsy();
  });

  test('should return void when comment is not found in delete comment', async () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      position: 'any_position',
    };

    element['addAnnotation']([annotation]);

    element['deleteComment']('any_comment_id');

    const commentId = () => element['annotations'][0].comments.find((comment) => comment.uuid === 'any_comment_id')?.uuid;

    expect(commentId()).toBeFalsy();
  });
});
