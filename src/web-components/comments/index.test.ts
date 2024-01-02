import { Comments } from './comments';

import * as Components from '.';

export { CommentsTopbar } from './components/topbar';
export { CommentsContent } from './components/content';
export { CommentsCommentItem } from './components/comment-item';
export { CommentsCommentInput } from './components/comment-input';
export { CommentsAnnotationPin } from './components/annotation-pin';
export { CommentsAnnotationItem } from './components/annotation-item';

describe('Components', () => {
  test('should be export Comments', () => {
    expect(Comments).toBeDefined();
    expect(Components.Comments).toBe(Comments);
  });

  test('should be export CommentsTopbar', () => {
    expect(Components.CommentsTopbar).toBeDefined();
    expect(Components.CommentsTopbar).toBe(Components.CommentsTopbar);
  });

  test('should be export CommentsContent', () => {
    expect(Components.CommentsContent).toBeDefined();
    expect(Components.CommentsContent).toBe(Components.CommentsContent);
  });

  test('should be export CommentsCommentItem', () => {
    expect(Components.CommentsCommentItem).toBeDefined();
    expect(Components.CommentsCommentItem).toBe(Components.CommentsCommentItem);
  });

  test('should be export CommentsCommentInput', () => {
    expect(Components.CommentsCommentInput).toBeDefined();
    expect(Components.CommentsCommentInput).toBe(Components.CommentsCommentInput);
  });

  test('should be export CommentsAnnotationPin', () => {
    expect(Components.CommentsAnnotationPin).toBeDefined();
    expect(Components.CommentsAnnotationPin).toBe(Components.CommentsAnnotationPin);
  });

  test('should be export CommentsAnnotationItem', () => {
    expect(Components.CommentsAnnotationItem).toBeDefined();
    expect(Components.CommentsAnnotationItem).toBe(Components.CommentsAnnotationItem);
  });
});
