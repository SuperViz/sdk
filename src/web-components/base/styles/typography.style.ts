import { css } from 'lit';

export const typography = css`
  .text {
    leading-trim: both;
    text-edge: cap;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-big {
    font-size: 14px;
    font-height: 22px;
  }

  .text-small {
    font-size: 10px;
    font-height: 15px;
  }
`;
