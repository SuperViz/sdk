const commonStyles = `
  #superviz-video-wrapper {
    position: relative;
  }

  #sv-video-wrapper iframe {
    position: absolute;
    top: 24px;
    right: 24px;

    border-radius: 4px;
    border: none;
  }
`;

const meetingSettingsStyles = `
  ${commonStyles}
  #sv-video-wrapper iframe {
    width: 370px;
    height: 450px;
  }
`;

const meetingRoomStyles = `
  ${commonStyles}
  #sv-video-wrapper iframe {
    width: 370px;
    height: 100%;
    min-height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
  }
`;

export { meetingSettingsStyles, meetingRoomStyles };
