import { css } from 'lit';

export const topbarStyle = css`
  div.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(var(--sv-gray-200));
    height: 50px;
  }

  div.topbar span {
    margin: 0 16px;
    color: rgb(var(--sv-gray-600));
  }

  .toggle-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    padding-left: 2px;
  }

  .toggle-icon:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
