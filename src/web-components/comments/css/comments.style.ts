import { css } from 'lit';

export const commentsStyle = css`
  .superviz-comments {
    display: flex;
    flex-direction: column;
    width: 320px;
    position: fixed;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0px;
    bottom: 0;
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    overflow: hidden;
  }

  .close {
    display: none;
  }

  .header {
    width: 100%;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .toggle {
    display: flex;
    position: fixed;
    width: 100px;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0;
    right: 0;
    bottom: 0;
  }

  .threads-on-left-side {
    left: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
  }

  .threads-on-right-side {
    right: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
  }
`;
