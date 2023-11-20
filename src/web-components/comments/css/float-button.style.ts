import { css } from 'lit';

export const floatButtonStyle = css`
  button.float-button {
    position: fixed;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background-color: white;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    color: rgb(var(--sv-gray-600));
    transition: all 300ms;
    cursor: pointer;
    overflow: hidden;
    padding-left: 12px;
  }

  button.float-button p {
    visibility: hidden;
    display: block;
  }

  .hide-button {
    display: none !important;
  }

  button.float-button:hover {
    width: 110px;
    border-radius: 30px;
  }

  button.float-button:hover p {
    visibility: visible;
    animation: expand 300ms ease-in-out;
  }

  // keyframe that expands the button without moving the icon
  @keyframes expand {
  }
`;
