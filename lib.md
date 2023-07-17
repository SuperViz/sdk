## Initialization example

```ts
import { SuperViz } from '@superviz/sdk';
import { VideoComponent } from '@superviz/sdk/components/video.ts';
import { CommentsComponent } from '@superviz/sdk/components/comments.ts';
import { MatterportComponent } from '@superviz/matterport';
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

// add configs
SuperViz.addComponent(video);
SuperViz.addComponent(presence);
SuperViz.addComponent(comments);
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
