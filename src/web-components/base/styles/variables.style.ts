import { css } from 'lit';

export const variableStyle = css`
  * {
    --sv-white: #ffffff;
    --sv-gray-200: #e9e5ef;
    --sv-gray-400: #aea9b8;
    --sv-gray-500: #7e7a88;
    --sv-gray-600: #57535f;
    --sv-gray-700: #39363e;
  }

  .sv-gray-200 {
    color: var(--sv-gray-200);
  }

  .sv-gray-400 {
    color: var(--sv-gray-400);
  }

  .sv-gray-500 {
    color: var(--sv-gray-500);
  }

  .sv-gray-600 {
    color: var(--sv-gray-600);
  }

  .sv-gray-700 {
    color: var(--sv-gray-700);
  }
`;
