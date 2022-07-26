const commonStyles = `
  html, body { 
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #sv-video-wrapper iframe {
    position: fixed;
    top: 0;
    right: 0;
    
    border: none;
    overflow: hidden;

    margin: 0; 
    padding: 0; 
    overflow: hidden;
  }
`;

const meetingRoomStyles = `
  ${commonStyles}
  #sv-video-wrapper iframe {
    width: 370px;
    height: 100%;
  }
`;

const meetingExpansiveModeStyles = `
  ${commonStyles}

  #sv-video-wrapper iframe {
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0; 
    
    width: 100%; 
  }
`;

export { meetingRoomStyles, meetingExpansiveModeStyles };
