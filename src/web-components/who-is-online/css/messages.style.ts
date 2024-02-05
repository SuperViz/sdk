import { css } from 'lit';

export const messagesStyle = css`
  .wio__controls-messages {
    position: absolute;
    right: 0;
  }

  .wio__presence-control-message {
    box-sizing: border-box;
    margin-top: 9px;
    font-size: 12px;
    padding: 8px 10px;
    font-family: 'Roboto';
    border-radius: 6px;
    align-self: flex-end;
    background-color: #fff;
    color: rgb(var(--sv-gray-700));
    border: 2px solid #e0e0e0;
    white-space: nowrap;
  }

  .wio__pcm__text {
    margin: 0;
  }

  .wio__presence-control-message span {
    margin-left: 3px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
