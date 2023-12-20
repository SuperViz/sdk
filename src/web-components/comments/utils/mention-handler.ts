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

const matchParticipant = (name: string, position, participantList): any => {
  let mentionList = []

  if (name.length === 0) {
    mentionList = participantList
  }
  
  if (name.length > 0) {
    mentionList = participantList
      .filter((participant: any) => participant.name
        .toLowerCase()
        .startsWith(name.toLowerCase())
      );
  }

  if (!(mentionList.length > 0)) {
    return DEFAULT_HIDE_MENTION_LIST
  }

  const mentions = prepareMentionList(mentionList, position);

  return {
    action: MENTION_ACTION.SHOW,
    mentions
  }
}

const prepareMentionList = (users: any, position): any => {
  return users.map((user: any) => ({
    name: user.name,
    userId: user.userId,
    avatar: user.avatar,
    position
  }))
}

export default {
  input: {
    addMention: () => undefined,
    matchParticipant: (name, position, participantList: any) => matchParticipant(name, position, participantList),
    addMentionList: () => undefined,
    removeMentionList: () => undefined,
    removeMentionOnBackspace: (event: any, selection: Selection) => removeMentionOnBackspace(event),
    removeEmptyMentions: (input: HTMLDivElement) => removeEmptyMentions(input),
  },
  mentions: {
    // ! WIP !
  }
}
