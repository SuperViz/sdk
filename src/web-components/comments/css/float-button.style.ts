import { css } from 'lit';

export const floatButtonStyle = css`
  .comments__floating-button {
    position: fixed;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;

    background-color: rgba(var(--sv-white));
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    color: rgb(var(--sv-gray-600));
    transition: all 300ms;
    cursor: pointer;
    overflow: hidden;
    padding-left: 10px;

    z-index: 99;
  }

  .comments__floating-button__text {
    opacity: 0;
    transition: opacity 100ms linear, width 150ms linear;
    text-align: left;
    width: 0px;
    overflow: hidden;
  }

  .comments__floating-button:hover .comments__floating-button__text {
    opacity: 1;
    transition-delay: opacity 200ms;
  }

  .comments__floating-button:not(:hover) {
    transition-delay: 100ms;
  }

  .hide-button {
    display: none !important;
  }

  .comments__floating-button:hover {
    width: 110px;
    border-radius: 30px;
  }

  .isActive {
    color: rgba(var(--sv-white));
    background-color: rgb(var(--sv-gray-400));
  }

  .isActive:hover {
    width: 90px;
  }

  .comments__floating-button:hover .textActive {
    width: 54.2px;
  }

  .comments__floating-button:hover .textInactive {
    width: 61.5px;
  }
`;
