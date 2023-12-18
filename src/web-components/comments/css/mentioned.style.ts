import { css } from 'lit';

export const mentionedStyle = css`
  .mention {
    display: inline;
  }

  .mentioned {
    display: inline;
    font-weight: bold;
  }

  .mentioned:hover {
    text-decoration: underline;
  }
`;
