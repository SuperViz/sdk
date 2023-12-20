import { css } from 'lit';

export const annotationPinStyles = css`
  .annotation-pin,
  .annotation-pin__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    pointer-events: auto;
  }

  .annotation-pin {
    position: absolute;

    width: 32px;
    height: 32px;

    background-color: rgb(var(--sv-white));
    border-radius: 50%;
    border-bottom-left-radius: 2px;

    border: 2px solid rgb(var(--sv-white));
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    transition: border-color 0.2s ease-in-out opacity 0.2s ease-in-out;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .annotation-pin:hover,
  .annotation-pin:focus,
  .annotation-pin--active {
    border-color: rgb(var(--sv-primary));
  }

  .annotation-pin__avatar {
    width: 100%;
    height: 100%;

    background-color: rgb(var(--sv-gray-400));
    border-radius: 50%;

    color: rgb(var(--sv-white));
  }

  .annotation-pin__avatar--add {
    color: rgb(var(--sv-gray-700));
    background-color: rgb(var(--sv-white));
  }

  .annotation-pin__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  }

  .floating-input {
    position: absolute;
    top: -2px;
    opacity: 0;
  }

  .left .floating-input {
    right: auto;
    left: 0;
    transform: translateX(calc(-100% - 7px));
    opacity: 1;
  }

  .right .floating-input {
    left: auto;
    right: 0;
    transform: translateX(calc(100% + 7px));
    opacity: 1;
  }
`;
