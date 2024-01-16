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

const matchParticipant = (name: string, position, participantList: Participant[]): hideMentionList => {
  let mentionList = []

  mentionList = participantList?.filter((participant: Participant) => participant?.email)
  if (name.length > 0) {
    mentionList = mentionList
      .filter((participant: Participant) => participant?.name
        .toLowerCase()
        .search(name.toLowerCase()) !== -1
      );
      if (name === mentionList[0]?.name?.toLowerCase()) {
        const mentions = prepareMentionList(mentionList, position);
        return {
          action: MENTION_ACTION.HIDE,
          mentions,
          findDigitParticipant: true
        }
      }
  }

  if (!(mentionList?.length > 0)) {
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
    avatar: user.avatar,
    email: user.email,
    position
  }))
}

export default {
  matchParticipant: (name, position, participantList: Participant[]) => matchParticipant(name, position, participantList),
}
