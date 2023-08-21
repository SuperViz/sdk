import { css } from 'lit';

export const commentItemStyle = css`
  .comment-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    gap: 4px;
  }

  .comment-item__user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: rgb(var(--sv-gray-500));
  }

  .comment-item__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .comment-item__content__body {
    color: rgb(var(--sv-gray-700));
  }
`;
