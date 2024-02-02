import { css } from 'lit';

export const commentInputStyle = css`
  .s-c__input {
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

  .s-c__input:focus-within {
    border: 1px solid rgb(var(--sv-gray-500));
  }

  #s-c__input__textarea {
    border: 0px;
    text-align: left;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
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

  #s-c__input__textarea:invalid {
    border-top: 15px solid transparent;
  }

  #s-c__input__textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
    line-height: 14px;
  }

  .s-c__input__options {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    height: 0;
    transition: 0.25s;
    border-radius: 0 0 4px 4px;
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

  .s-c__input__divisor {
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

  .s-c__input__mention-button {
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

  .s-c__input__send-button {
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
    cursor: pointer;
  }

  .s-c__input__send-btn:disabled {
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
    bottom: 4px;
  }

  #s-c__input__textarea:focus,
  #s-c__input__textarea.active-textarea {
    border-radius: 4px 4px 0 0;
  }

  #s-c__input__textarea:focus::placeholder {
    color: transparent;
  }
`;
