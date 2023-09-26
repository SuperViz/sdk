import { css } from 'lit';

export const annotationItemStyle = css`
  .annotation-item--selected {
    background-color: rgba(var(--sv-gray-200), 0.5);
  }

  .annotation-item:hover:not(.annotation-item--selected) {
    background-color: rgba(var(--sv-gray-200), 0.3);
  }

  .avatars-comments {
    display: flex;
    padding: 8px;
  }

  .avatar-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 18px;
  }

  .avatar {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar-divs-1 {
    z-index: 4;
    left: 0;
  }

  .avatar-divs-2 {
    z-index: 3;
    left: 16px;
  }

  .avatar-divs-3 {
    z-index: 2;
    left: 32px;
  }

  .avatar-divs-4 {
    z-index: 1;
    left: 48px;
  }

  .avatar-divs-5 {
    z-index: 1;
    left: 60px;
  }

  .replies {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding-left: 8px;
  }

  .last-reply {
    padding-left: 14px;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .comments-container {
    display: flex;
    flex-direction: column;
  }

  .comments--expand {
    display: flex;
  }

  .comment-avatar--expand {
    display: block;
  }

  .hidden {
    display: none;
  }

  .annotation-item {
    padding: 8px;
  }
`;
