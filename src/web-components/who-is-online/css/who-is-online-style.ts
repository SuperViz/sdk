import { css } from 'lit';

export const whoIsOnlineStyle = css`
  .wio__participant-list {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
  }

  .wio {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 99;
  }

  .wio__presence-control-message__text {
    margin: 0;
  }

  .wio__participant {
    --border-color: #aea9b8;

    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
  }

  .wio__participant:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid var(--border-color);
  }

  .followed:before {
    border-style: dashed !important;
    animation: rotate 15s linear infinite;
  }

  .private {
    opacity: 0.3;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .wio__participant.disable-dropdown {
    cursor: default;
  }

  .wio__presence-control-message {
    box-sizing: border-box;
    margin-top: 9px;
    font-size: 12px;
    padding: 8px 10px;
    font-family: 'Roboto';
    border-radius: 6px;
    align-self: flex-end;
    background-color: #fff;
    color: rgb(var(--sv-gray-700));

    border: 2px solid #e0e0e0;
  }

  .wio__presence-control-message span {
    margin-left: 3px;
    text-decoration: underline;
    cursor: pointer;
  }

  .wio__participant__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .superviz-who-is-online__excess {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    font-weight: bold;
    color: #26242a;
    cursor: pointer;
    color: #aea9b8;
  }

  .excess_participants:hover,
  .excess_participants--open {
    background-color: #aea9b8 !important;
  }

  .excess_participants:hover > div,
  .excess_participants--open > div {
    color: #fff !important;
  }

  @media (max-width: 780px) {
    .wio__participant,
    .wio__participant::before {
      width: 32px;
      height: 32px;
    }

    .wio__participant__avatar {
      width: 24px;
      height: 24px;
    }

    .wio__participant-list {
      gap: 8px;
    }
  }
`;
