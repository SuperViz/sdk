import { css } from 'lit';

export const annotationsStyle = css`
  div.annotations {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--sv-gray-400);
    min-height: 10px;
    width: 100%;
    padding-bottom: 16px;
  }

  div.annotations .add-comment-btn {
    color: #fff;
    text-align: center;
    cursor: pointer;
    padding: 16px;
  }
`;
