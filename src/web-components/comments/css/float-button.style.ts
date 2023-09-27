import { css } from 'lit';

export const floatButtonStyle = css`
  button.float-button {
    position: fixed;
    top: 20px;
    left: 20px;

    border-radius: 50%;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: orange;
  }
`;
