## Initialization example

```ts
import { SuperViz } from '@superviz/sdk';
import {
  VideoComponent,
  Realtime,
  PresenceComponent,
  CommentsComponent,
  CanvasAdapter,
} from '@superviz/sdk/components';
import { Presence3D, CommentsAdapter } from '@superviz/matterport';
import { Presence3D, CommentsAdapter } from '@superviz/three';

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
SuperViz.addComponent(video);

const realtime = new Realtime();
SuperViz.addComponent(realtime);

const mpPresence = new Presence3D(mpInstance);
SuperViz.addComponent(mpPresence);

// Initialize comments with canvas
const canvasAdapter = new CanvasAdapter('canvas-id');
const comments = new CommentsComponent(canvasAdapter);
SuperViz.addComponent(comments);

// Initialize coments with matterport 3d component
const mpCommentsAdapter = new CommentsAdapter(mpInstance);
const comments = new CommentsComponent(mpCommentsAdapter);
SuperViz.addComponent(comments);
SuperViz.addComponent(mpPresence);

// PubSub
realtime.unsubscribe('presence-updated', () => {});
realtime.subscribe('presence-updated', () => {});
realtime.publish('presence-updated', {});

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
