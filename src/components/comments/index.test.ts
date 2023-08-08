import { CommentsComponent } from './index';

describe('CommentsComponent', () => {
  let commentsComponent: CommentsComponent;

  beforeEach(() => {
    commentsComponent = new CommentsComponent();
  });

  it('should create a new instance of CommentsComponent', () => {
    expect(commentsComponent).toBeInstanceOf(CommentsComponent);
  });

  it('should have a name property', () => {
    expect((commentsComponent as any).name).toEqual('Comments');
  });

  it('should have a logger property', () => {
    expect((commentsComponent as any).logger).toBeDefined();
  });

  it('should have an element property', () => {
    expect((commentsComponent as any).element).toBeUndefined();
  });

  it('should create a new element when start() is called', () => {
    (commentsComponent as any).start();
    expect((commentsComponent as any).element).toBeDefined();
  });

  it('should add the element to the document body when start() is called', () => {
    (commentsComponent as any).start();
    expect(document.body.contains((commentsComponent as any).element)).toBe(true);
  });

  it('should remove the element from the document body when destroy() is called', () => {
    (commentsComponent as any).start();
    (commentsComponent as any).destroy();
    expect(document.body.contains((commentsComponent as any).element)).toBe(false);
  });
});
