const MENTION_ACTION = {
  SHOW: 'show',
  HIDE: 'hide'
}

const DEFAULT_HIDE_MENTION_LIST = {
  action: MENTION_ACTION.HIDE,
  mentions: []
}

const matchParticipant = (userName: string, position, participantList): any => {
  let mentionList = []

  mentionList = participantList.filter((participant: any) => participant.email)

  if (userName.length > 0) {
    mentionList = mentionList
      .filter((participant: any) => participant.userName
        .toLowerCase()
        .search(userName.toLowerCase()) !== -1
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
    id: user.id,
    name: user.name,
    userName: user.userName,
    avatar: user.avatar,
    position
  }))
}

export default {
  matchParticipant: (userName, position, participantList: any) => matchParticipant(userName, position, participantList),
}
