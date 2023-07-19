<p align="center">
  <a href="https://superviz.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/56120553?s=200&v=4" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
The SuperViz SDK enables you to implement SuperViz-supported meetings inside your web app
</p>

<p align="center">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/superviz/sdk/Publish%20SDK">
<img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/superviz/sdk">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/superviz/sdk">
<img alt="GitHub" src="https://img.shields.io/github/license/superviz/sdk">
<img alt="npm type definitions" src="https://img.shields.io/npm/types/@superviz/sdk">
<img alt="npm" src="https://img.shields.io/npm/dw/@superviz/sdk">
</p>

## Description

`@superviz/sdk` is a package that abstracts all operations and management of meeting spaces from SuperViz, including audio, video, screen sharing and virtual 3D spaces.

## Getting started

To check out the guide, visit [https://docs.superviz.com](https://docs.superviz.com)

## Issues

To report a new bug or request a new feature, you can file an issue with the correct template. [Issue reporting](https://github.com/superviz/sdk/issues)

## To run locally

Add file .remote-config.js with the following content:

```javascript
module.exports = {
  remoteConfig: {
    apiUrl: 'https://api.example.com',
    conferenceLayerUrl: 'https://conference-url.example.com',
  },
};
```

And add into inicialization of SDK

```javascript
environment: 'local';
```

Superviz SDK is [BSD 2 licensed](LICENSE).
