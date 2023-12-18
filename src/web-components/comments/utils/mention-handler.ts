import { Comment } from "../../../components/comments/types";

const MENTION_ACTION = {
  SHOW: 'show',
  HIDE: 'hide'
}

const DEFAULT_HIDE_MENTION_LIST = {
  action: MENTION_ACTION.HIDE,
  mentions: []
}

// export const addMention = (comment: Comment): string => {
//   const regex = /{{(.*?)}}/g;
//   const matches = comment.text.match(regex);

//   return matches.reduce((newComment, match) => {
//     const userId = match.replace(/{{|}}/g, '');
//     const mention = comment.mentions.find(mention => mention.userId === userId);
//     return newComment.replace(match, mention.name);;
//   }, comment.text);
// }

// export const removeMention = (comment: Comment): any => {
//   // find 
// }

const insertMention = () => {
  //
}

const removeMentionOnBackspace = (event: any): any => {
  if (!(event.inputType === "deleteContentBackward" || event.inputType === 'deleteContentForward' || event.inputType === "deleteByCut")) {
    return;
  }

  const range = window.getSelection().getRangeAt(0);
  const { parentElement } = range.commonAncestorContainer;
  if (parentElement.parentElement.className === 'mentioned') {
    parentElement.remove();
  }
}

const removeEmptyMentions = (input: HTMLDivElement): any => {
  const divs = input.querySelectorAll('.mentioned')
  divs.forEach(div => {
    if (div.innerHTML.trim() === '') {
      div.parentNode.removeChild(div);
    }
  });
}

const matchParticipant = (input: HTMLDivElement, event: any, participantList: any): any => {
  const inputValue = input.innerHTML;
  const mentionIndex = inputValue.lastIndexOf('@');

  const selection = window.getSelection();
  const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  if (!(mentionIndex !== -1)) {
    return DEFAULT_HIDE_MENTION_LIST
  }

  const mentionName = extractMentionName(inputValue, mentionIndex, event);

  const mentionList = participantList
    .filter((participant: any) => participant.name
      .toLowerCase()
      .startsWith(mentionName.toLowerCase())
    );

  if (!(mentionList.length > 0)) {
    return DEFAULT_HIDE_MENTION_LIST
  }

  const mentions = prepareMentionList(mentionList, mentionIndex, range, mentionName);

  return {
    action: MENTION_ACTION.SHOW,
    mentions
  }
}

const extractMentionName = (input: string, mentionIndex: number, event: any): string => {
  const text = event.target.innerText.trim();
  const lastCaracter = text.slice(-1);
  const lastItemFind = lastCaracter === '@' || event.data === "@";

  return lastItemFind ? '' : input.slice(mentionIndex + 1);
}

const prepareMentionList = (users: any, mentionIndex: number, range: any, mentionName: string): any => {
  return users.map((user: any) => ({
    name: user.name,
    userId: user.userId,
    avatar: user.avatar,
    index: mentionIndex,
    range,
    mentionName
  }))
}

export default {
  input: {
    addMention: () => undefined,
    matchParticipant: (input: HTMLDivElement, event: any, participantList: any) => matchParticipant(input, event, participantList),
    addMentionList: () => undefined,
    removeMentionList: () => undefined,
    removeMentionOnBackspace: (event: any, selection: Selection) => removeMentionOnBackspace(event),
    removeEmptyMentions: (input: HTMLDivElement) => removeEmptyMentions(input),
  },
  mentions: {
    // ! WIP !
  }
}
