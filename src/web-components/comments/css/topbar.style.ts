import { css } from 'lit';

export const topbarStyle = css`
  div.topbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--sv-gray-200);
    height: 50px;
  }

  div.topbar span {
    margin: 16px;
    color: var(--sv-gray-600);
  }
`;
