const styles = `
  html, body { 
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #sv-video-wrapper iframe {
    position: fixed;
    
    border: none;

    margin: 0; 
    padding: 0; 
    overflow: hidden;
  }

  #sv-video-wrapper iframe.sv-video-frame--right { 
    top: 0;
    right: 0;
  }

  #sv-video-wrapper iframe.sv-video-frame--left { 
    top: 0; 
    left: 0;
  }

  #sv-video-wrapper iframe.sv-video-frame--bottom { 
    bottom: 0;
    width: 100%;
  }

  #sv-video-wrapper iframe.sv-video-frame--expansive-mode {
    bottom: 0; 
    right: 0; 
    width: 100%;
  }

  #sv-video-wrapper iframe.sv-video-frame--settings-view {
    width: 370px;
  }
`;

export default styles;
