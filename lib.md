## Initialization example

```ts
import { SuperViz } from '@superviz/sdk';
import { VideoComponent } from '@superviz/sdk/components/video.ts';
import { CommentsComponent, CanvasAdapter } from '@superviz/sdk/components/comments.ts';
import { Presence3D, CommentsAdapter } from '@superviz/matterport';
import { Presence3D, CommentsAdapter } from '@superviz/three';
import { PresenceComponent } from '@superviz/sdk/components/presence.ts';

const SuperViz = await Manager(DEVELOPER_KEY, {
  roomId: this.roomId,
  participant: {
    id: this.userId,
    name: 'John Doe',
    type: userType,
    avatar: {
      thumbnail: 'https://production.storage.superviz.com/readyplayerme/1.png',
    },
  },
});

const video = new VideoComponent();

const mpPresence = new Presence3D(mpInstance);
SuperViz.addComponent(mpPresence);

// Initialize comments with canvas
const canvasAdapter = new CanvasAdapter('canvas-id');
const comments = new CommentsComponent(canvasAdapter);
SuperViz.addComponent(comments);

// Initialize coments with matterport 3d component
const canvasAdapter = new CommentsAdapter(mpInstance);
const comments = new CommentsComponent(canvasAdapter);
SuperViz.addComponent(comments);

// const mpCommentsAdapter = new CommentsAdapter(mpInstance);

// add configs
SuperViz.addComponent(video);
SuperViz.addComponent(mpPresence);

// PubSub
SuperViz.unsubscribe('presence-updated', () => {});
SuperViz.subscribe('presence-updated', () => {});
SuperViz.publish('presence-updated', {});

// removing component
SuperViz.removeComponent(mpPresence);
```

### Folder strucuture

```
- sdk
  - src
    - common
      - utils
      - types
    - components
      - comments
      - presence
      - video
    - web components
      - comments
      - presence
    - services
      - realtime
      - api
      - auth
    - core
      - manager.ts
      - pubsub.ts
      - index.ts
```
