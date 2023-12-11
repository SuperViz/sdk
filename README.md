<p align="center">
  <a href="https://superviz.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/56120553?s=200&v=4" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/superviz/sdk/Publish%20SDK">
<img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/superviz/sdk">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/superviz/sdk">
<img alt="GitHub" src="https://img.shields.io/github/license/superviz/sdk">
<img alt="npm type definitions" src="https://img.shields.io/npm/types/@superviz/sdk">
<img alt="npm" src="https://img.shields.io/npm/dw/@superviz/sdk">
</p>

SuperViz provides a suite of programmable low-code Collaboration and Communication components, all synchronized with an advanced Real-time Data Engine, enabling real-time and asynchronous collaboration and communication within any JavaScript based application.

SuperViz offers a comprehensive suite of components, all synchronized with an advanced Real-time Data Engine, facilitating real-time collaboration in JavaScript-based applications. SuperViz SDK enables you to use one of our components:

- [Contextual Comments](https://docs.superviz.com/components/contextual-comments/)
  - [Contextual Comments for Autodesk](https://docs.superviz.com/components/contextual-comments/contextual-comments-for-autodesk)
  - [Contextual Comments for Matterport](https://docs.superviz.com/components/contextual-comments/contextual-comments-for-matterport)
  - [Contextual Comments for ThreeJS](https://docs.superviz.com/components/contextual-comments/contextual-comments-for-threejs)
- Presence
  - [Presence in Autodesk](https://docs.superviz.com/components/presence/presence3d/AutodeskPresence)
  - [Presence in Matterport](https://docs.superviz.com/components/presence/presence3d/MatterportPresence)
  - [Presence in ThreeJS](https://docs.superviz.com/components/presence/presence3d/ThreeJsPresence)
  - [Real-time Mouse Pointers](https://docs.superviz.com/components/presence/mouse-pointers)
  - [Real-time Data Engine](https://docs.superviz.com/components/presence/real-time-data-engine)
  - [Who-is-Online](https://docs.superviz.com/components/presence/who-is-online)
- [Video Conference](https://docs.superviz.com/components/video/video-conference)

You can also combine components to create a custom solution for your application.

How to start coding with SuperViz? After installing this package, you’ll need to [create an account](https://dashboard.superviz.com/) to retrieve a SuperViz Token and start coding.

## Quickstart

### 1. Installation

Install SuperViz SDK in your Node.js powered apps with the npm package:

```bash
npm install --save @superviz/sdk
```

Or, with yarn:

```bash
yarn add @superviz/sdk
```

### 2. Import the SDK

Once installed, import the SDK to your code:

```jsx
import SuperVizSdk from '@superviz/sdk';
```

### 3. Initialize the SDK

After importing the SDK, you can initialize passing your `DEVELOPER_KEY` as a parameter and the options object. You can see details for the options object on the [SDK Initialization page](https://docs.superviz.com/init/initialization).

The SuperViz SDK is your primary gateway to access all SDK features, offering the essential methods to add its components.

```jsx
async function initializeSuperVizSdk() {
  const sdk = await SuperVizSdk(DEVELOPER_KEY, {
    roomId: '<ROOM-ID>',
    group: {
      id: '<GROUP-ID>',
      name: '<GROUP-NAME>',
    },
    participant: {
      id: '<USER-ID>',
      name: '<USER-NAME>',
    },
  });

  return sdk;
}
```

### Documentation

You can find the complete documentation for every component and how to initialize them on the [SuperViz SDK Documentation page](https://docs.superviz.com/).

## Contributing

### Issues

To report a new bug, request a new feature, or if you need any help, you can [file an issue on GitHub](https://github.com/SuperViz/sdk/issues/new/choose). We have a few templates to help you out.

### Run locally

Add file .remote-config.js with the following content:

```javascript
module.exports = {
  remoteConfig: {
    apiUrl: 'https://api.example.com',
    conferenceLayerUrl: 'https://conference-url.example.com',
  },
};
```

And add into initialization of SDK

```javascript
environment: 'local';
```

## License

SuperViz SDK is licensed under the [BSD 2-Clause License](LICENSE).
