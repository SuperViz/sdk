const styles = `
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
    transform: translateX(0);
    transition: width 0.2s ease-in-out;
  }

  #sv-video-wrapper iframe {
    width: 225px;
  }

  #sv-video-wrapper iframe.sv-video-frame--expansive-mode {
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0; 
    width: 100%;
    transform: translateX(calc(100vw - 100%));
  }

  #sv-video-wrapper iframe.sv-video-frame--settings-view {
    width: 370px;
  }
`;

export default styles;
