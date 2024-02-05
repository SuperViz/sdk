import { css } from 'lit';

export const commentItemStyle = css`
  .reply {
    padding-left: 24px !important;
  }

  .s-c__comment-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    gap: 4px;
  }

  .s-c__comment-item__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: rgb(var(--sv-gray-500));
  }

  .s-c__comment-item__actions {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .s-c__comment-item__actions superviz-dropdown,
  .s-c__comment-item__icons {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .s-c__comment-item__metadata {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
  }

  .s-c__comment-item__avatar-container {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .s-c__comment-item__avatar-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .s-c__comment-item__content {
    width: 100%;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .s-c__comment-item__content__body {
    color: rgb(var(--sv-gray-700));
  }

  .hidden {
    display: none;
  }

  .mentioned {
    display: inline-block;
  }
`;
