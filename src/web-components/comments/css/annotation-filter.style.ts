import { css } from 'lit';

export const annotationFilterStyle = css`
  .select {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .select-container {
    white-space: nowrap;
    padding: 12px;
    cursor: pointer;
    color: rgb(var(--sv-gray-500));
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }
`;
