import { css } from 'lit';

export const commentInputStyle = css`
  .comment-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  #comment-input--textarea {
    all: unset;
    border: 0px;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-y: scroll;
    resize: none;
    line-height: 1rem;
    max-height: 5rem;
    appearance: none;
    height: 40px;
    width: 100%;
    box-sizing: border-box;

    padding-top: 7px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 11px solid transparent;
    border-left: 11px solid transparent;
  }

  #comment-input--textarea:invalid {
    border-top: 15px solid transparent;
  }

  #comment-input--textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
    line-height: 14px;
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
    height: 40px;
    padding: 4px 8px;
  }

  .sv-hr {
    border: none;
    width: 100%;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
    height: 0;
    position: absolute;
  }

  .active-hr {
    border-top: 1px solid rgb(var(--sv-gray-300));
    opacity: 1;
    position: relative;
    visibility: visible;
  }

  .comment-actions {
    position: absolute;
    left: 8px;
    bottom: 3px;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
  }

  .active-textarea > .comment-actions {
    opacity: 1;
    visibility: visible;
  }

  .mention {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    color: rgb(var(--sv-gray-600));
    cursor: pointer;
    transition: 0.25s background-color ease-in;
  }

  .mention:hover {
    background-color: rgb(var(--sv-gray-200));
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

  .align-send-btn > superviz-icon {
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
