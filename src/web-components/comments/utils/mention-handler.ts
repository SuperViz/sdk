import { Participant } from "../../../components/comments/types"


const MENTION_ACTION = {
  SHOW: 'show',
  HIDE: 'hide'
}

const DEFAULT_HIDE_MENTION_LIST = {
  action: MENTION_ACTION.HIDE,
  mentions: [],
  findDigitParticipant: false,
}

type hideMentionList = {
  action: string;
  mentions: Participant[];
  findDigitParticipant: boolean
};

const matchParticipant = (userName: string, position, participantList: Participant[]): hideMentionList => {
  
  let mentionList = []

  mentionList = participantList.filter((participant: Participant) => participant.email)
  if (userName.length > 0) {
    mentionList = mentionList
      .filter((participant: Participant) => participant.userName
        .toLowerCase()
        .search(userName.toLowerCase()) !== -1
      );
      if (userName === mentionList[0]?.userName?.toLowerCase()) {
        const mentions = prepareMentionList(mentionList, position);
        return {
          action: MENTION_ACTION.HIDE,
          mentions,
          findDigitParticipant: true
        }
      }
  }

  if (!(mentionList.length > 0)) {
    return DEFAULT_HIDE_MENTION_LIST
  }

  const mentions = prepareMentionList(mentionList, position);

  return {
    action: MENTION_ACTION.SHOW,
    mentions,
    findDigitParticipant: false
  }
}

const prepareMentionList = (users: Participant[], position): Participant[] => {
  return users.map((user: Participant) => ({
    id: user.id,
    name: user.name,
    userName: user.userName,
    avatar: user.avatar,
    email: user.email,
    position
  }))
}

export default {
  matchParticipant: (userName, position, participantList: Participant[]) => matchParticipant(userName, position, participantList),
}
