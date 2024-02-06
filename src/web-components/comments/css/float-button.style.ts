import { css } from 'lit';

export const floatButtonStyle = css`
  .s-c__floating-button {
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

  .s-c__floating-button__text {
    opacity: 0;
    transition: opacity 100ms linear;
  }

  .s-c__floating-button:hover .s-c__floating-button__text {
    opacity: 1;
    transition-delay: 200ms;
  }

  .s-c__floating-button:not(:hover) {
    transition-delay: 100ms;
  }

  .hide-button {
    display: none !important;
  }

  .s-c__floating-button:hover {
    width: 110px;
    border-radius: 30px;
  }
`;
