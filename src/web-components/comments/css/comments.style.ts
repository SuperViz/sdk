import { css } from 'lit';

export const commentsStyle = css`
  .container {
    display: flex;
    flex-direction: column;
    width: 320px;
    position: fixed;
    color: var(--sv-gray-700);
    background: var(--sv-white);
    top: 0;
    right: 0;
    bottom: 0;
  }

  .container-close {
    display: none;
  }

  .header {
    width: 100%;
  }

  .content {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sv-hr {
    width: 100%;
    height: 2px;
    background: var(--sv-gray-200);
  }
`;
