import { css } from 'lit';

export const mentionListStyle = css`
  #mention-list {
    position: relative;
    z-index: 1;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    display: none;
    width: 216px;
    text-align: -webkit-center;
    border-radius: 2px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.30);
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .mention-item {
    cursor: pointer;
    align-items: center;
    display: flex;
    height: 48px;
    width: 208px;
    margin-left: 4px;
    margin-right: 4px;
  }

  .mention-item:hover {
    background: rgb(var(--sv-gray-200));
  }

  .avatar {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: 32%;
    margin-right: 14px;
    margin-left: 12px;
  }

  .avatar-type {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: rgb(var(--sv-gray-600));
  }
`;
