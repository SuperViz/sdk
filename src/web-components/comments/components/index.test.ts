import { CommentsAnnotationItem } from './annotation-item';
import { CommentsAnnotationPin } from './annotation-pin';
import { CommentsCommentInput } from './comment-input';
import { CommentsCommentItem } from './comment-item';
import { CommentsContent } from './content';
import { CommentsTopbar } from './topbar';

import * as Components from '.';

describe('Components', () => {
  test('should be export CommentsTopbar', () => {
    expect(Components.CommentsTopbar).toBeDefined();
    expect(Components.CommentsTopbar).toBe(CommentsTopbar);
  });

  test('should be export CommentsContent', () => {
    expect(Components.CommentsContent).toBeDefined();
    expect(Components.CommentsContent).toBe(CommentsContent);
  });

  test('should be export CommentsCommentItem', () => {
    expect(Components.CommentsCommentItem).toBeDefined();
    expect(Components.CommentsCommentItem).toBe(CommentsCommentItem);
  });

  test('should be export CommentsCommentInput', () => {
    expect(Components.CommentsCommentInput).toBeDefined();
    expect(Components.CommentsCommentInput).toBe(CommentsCommentInput);
  });

  test('should be export CommentsAnnotationPin', () => {
    expect(Components.CommentsAnnotationPin).toBeDefined();
    expect(Components.CommentsAnnotationPin).toBe(CommentsAnnotationPin);
  });

  test('should be export CommentsAnnotationItem', () => {
    expect(Components.CommentsAnnotationItem).toBeDefined();
    expect(Components.CommentsAnnotationItem).toBe(CommentsAnnotationItem);
  });
});
