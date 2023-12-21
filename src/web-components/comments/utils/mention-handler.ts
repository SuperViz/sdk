const MENTION_ACTION = {
  SHOW: 'show',
  HIDE: 'hide'
}

const DEFAULT_HIDE_MENTION_LIST = {
  action: MENTION_ACTION.HIDE,
  mentions: []
}

const matchParticipant = (name: string, position, participantList): any => {
  let mentionList = []

  mentionList = participantList.filter((participant: any) => participant.email)

  if (name.length > 0) {
    mentionList = mentionList
      .filter((participant: any) => participant.name
        .toLowerCase()
        .search(name.toLowerCase()) !== -1
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
  matchParticipant: (name, position, participantList: any) => matchParticipant(name, position, participantList),
}
