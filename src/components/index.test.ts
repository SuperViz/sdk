import { CommentsComponent } from './comments';
import { VideoComponent } from './video';

import * as Components from '.';

describe('Components', () => {
  test('should be export VideoComponent', () => {
    expect(Components.VideoComponent).toBeDefined();
    expect(Components.VideoComponent).toBe(VideoComponent);
  });

  test('should be export CommentsComponent', () => {
    expect(Components.CommentsComponent).toBeDefined();
    expect(Components.CommentsComponent).toBe(CommentsComponent);
  });
});
