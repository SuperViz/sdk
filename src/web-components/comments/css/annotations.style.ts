import { css } from 'lit';

export const annotationsStyle = css`
  div.annotations {
    display: flex;
    justify-content: center;
    padding: 16px;
    background-color: var(--sv-gray-400);
    min-height: 10px;
    width: 100%;
  }

  div.annotations .add-comment-btn {
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;
