import { css } from 'lit';

export const commentInputStyle = css`
  .comment-input {
    display: flex;
    flex-direction: column;
    width: 288px;
    background: rgb(var(--sv-white));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-300));
    position: relative;
    min-height: 40px;
    box-sizing: border-box;
  }

  .comment-input:focus-within {
    border: 1px solid rgb(var(--sv-gray-500));
  }

  .comment-input:focus-within > .sv-hr {
    background: rgb(var(--sv-gray-500));
  }

  #comment-input--textarea {
    all: unset;
    border: 0px;
    border-radius: 4px;
    outline: none;
    height: 39.5px;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    padding: 12px 11px !important;
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    resize: none;
    appearance: none;
    width: 100%;
    box-sizing: border-box;
  }

  #comment-input--textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
  }

  .comment-input--options {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    height: 0;
    transition: 0.25s;
  }

  .active-textarea {
    height: 39.5px;
    padding: 4px 8px;
  }
  .sv-hr {
    width: 100%;
    min-height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
    display: none;
  }

  .active-hr {
    display: block;
  }

  .mention {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    color: rgb(var(--sv-gray-600));
  }

  .mention > superviz-icon {
    height: 16px;
    width: 16px;
  }

  .comment-input--send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(var(--sv-primary));
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: rgba(var(--sv-white), 1);
    border: 0px;
  }

  .align-send-btn > superviz-icon,
  .mention > superviz-icon {
    margin-right: 2px;
    margin-top: 4px;
    cursor: pointer;
  }

  .comment-input--send-btn:disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(var(--sv-gray-200));
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: rgb(var(--sv-gray-600));
    border: 0px;
  }

  .comment-input-options {
    display: flex;
    gap: 4px;
    position: absolute;
    right: 8px;
    bottom: 3px;
  }

  #comment-input--textarea:focus::placeholder {
    color: transparent;
  }
`;
