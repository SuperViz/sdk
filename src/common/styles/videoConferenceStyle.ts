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
    top: var(--superviz-offset-top);
    right: var(--superviz-offset-right);
  }

  #sv-video-wrapper iframe.sv-video-frame--left { 
    top: var(--superviz-offset-top);
    left: var(--superviz-offset-left);
  }

  #sv-video-wrapper iframe.sv-video-frame--bottom { 
    bottom: var(--superviz-offset-bottom);
    width: 100%;
  }

  #sv-video-wrapper iframe.sv-video-frame--expansive-mode {
    bottom: var(--superviz-offset-bottom); 
    right: var(--superviz-offset-right);
    width: 100%;
  }

  #sv-video-wrapper iframe.sv-video-frame--settings-view {
    width: 370px;
  }
`;

export default styles;
