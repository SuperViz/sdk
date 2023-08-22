import { commentsStyle } from '../../css';
import * as cssStyles from '../../css';
import { annotationItemStyle } from '../../css/annotation-item.style';
import { annotationsStyle } from '../../css/annotations.style';
import { commentInputStyle } from '../../css/comment-input.style';
import { commentItemStyle } from '../../css/comment-item.style';
import { contentStyle } from '../../css/content.style';
import { topbarStyle } from '../../css/topbar.style';

describe('css', () => {
  test('should be export CommentsAnnotations', () => {
    expect(cssStyles.annotationsStyle).toBeDefined();
    expect(cssStyles.annotationsStyle).toBe(annotationsStyle);
  });

  test('should be export CommentsContent', () => {
    expect(cssStyles.contentStyle).toBeDefined();
    expect(cssStyles.contentStyle).toBe(contentStyle);
  });

  test('should be export CommentsCommentItem', () => {
    expect(cssStyles.commentItemStyle).toBeDefined();
    expect(cssStyles.commentItemStyle).toBe(commentItemStyle);
  });

  test('should be export CommentsCommentInput', () => {
    expect(cssStyles.commentInputStyle).toBeDefined();
    expect(cssStyles.commentInputStyle).toBe(commentInputStyle);
  });

  test('should be export CommentsAnnotationPin', () => {
    expect(cssStyles.annotationItemStyle).toBeDefined();
    expect(cssStyles.annotationItemStyle).toBe(annotationItemStyle);
  });

  test('should be export CommentsAnnotationItem', () => {
    expect(cssStyles.topbarStyle).toBeDefined();
    expect(cssStyles.topbarStyle).toBe(topbarStyle);
  });
});
