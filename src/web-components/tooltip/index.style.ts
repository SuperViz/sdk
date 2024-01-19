import { css } from 'lit';

export const dropdownStyle = css`
  .superviz-who-is-online__tooltip {
    --host-height: 0px;
    --host-width: 0px;
    --vertical-offset: 12px;

    background-color: rgb(var(--sv-gray-600));
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    border-radius: 2px;
    cursor: default;
    display: none;
    transition: opacity 0.2s ease-in-out display 0s;
    z-index: 100;
  }

  .tooltip-extras {
    left: 29px;
    top: 60px;
    z-index: 10;
  }

  .superviz-who-is-online__tooltip-arrow {
    width: 13px;
    height: 13px;
    position: absolute;
    background-color: rgb(var(--sv-gray-600));
    transform: rotate(45deg);
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .show-tooltip {
    opacity: 1;
    display: block;
  }

  .tooltip-name,
  .tooltip-action {
    margin: 0;
    font-family: roboto;
    white-space: nowrap;
    text-align: center;
  }

  .tooltip-name {
    color: white;
    font-size: 14px;
  }

  .tooltip-action {
    color: rgb(var(--sv-gray-400));
    font-size: 12px;
  }

  .tooltip-top {
    top: auto;
    bottom: calc(var(--host-height) + var(--vertical-offset));
  }

  .tooltip-bottom {
    top: calc(var(--host-height) + var(--vertical-offset));
    bottom: auto;
  }

  .tooltip-left {
    translate: -50% 0;
  }

  .tooltip-center {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }

  .tooltip-right {
    translate: 50% 0;
  }

  .tooltip-bottom .superviz-who-is-online__tooltip-arrow {
    top: -6.5px;
  }

  .tooltip-top .superviz-who-is-online__tooltip-arrow {
    bottom: -6.5px;
  }

  .tooltip-center .superviz-who-is-online__tooltip-arrow {
    left: 0;
    margin-left: 50%;
    translate: -50% 0;
  }

  .tooltip-left .superviz-who-is-online__tooltip-arrow {
    translate: 50% 0;
    border-radius: 0;
    right: 0;
  }

  .tooltip-right .superviz-who-is-online__tooltip-arrow {
    translate: -100% 0;
    border-radius: 0;
  }

  .shift-left {
    left: 0;
    transform: translateX(-6%);
    --vertical-offset: 2px;
  }

  @media (max-width: 780px) {
    .tooltip-extras {
      top: 52px;
      left: 25px;
    }
  }
`;
