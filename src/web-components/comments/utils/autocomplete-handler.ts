import { Participant } from "../../../components/comments/types"

export class AutoCompleteHandler {
  constructor () {
    this.input = null
    this.mentions = []
  }

  private keys = ['@']
  private event: InputEvent
  private input: HTMLTextAreaElement
  private key: string
  private mentions: { userId: string, name: string, userName: string }[]

  setInput (event: InputEvent) {
    this.event = event
    this.input = event.target as HTMLTextAreaElement

    this.key = event.data
  }

  getMentions () {
    return this.mentions
      .filter((mention, index, self) => self.findIndex(m => m.userId === mention.userId) === index)
      .filter(mention => this.input.value.includes(mention.userName))
  }

  setMentions (mentions) {
    this.mentions = mentions
  }

  addMention (mention: { userId: string, name: string, userName: string }) {
    this.mentions = [...this.mentions, mention]
    this.mentions = this.mentions.filter((mention, index, self) => self.findIndex(m => m.userId === mention.userId) === index)
  }

  clearMentions () {
    this.mentions = []
  }

  getSelectionPosition () {
    const caretIndex = this.getSelectionStart()
    const keyData = this.getLastKeyBeforeCaret(caretIndex)
    const keyIndex = keyData?.keyIndex ?? -1

    return {
      start: keyIndex + 1,
      end: caretIndex,
    }
  }

  getSelectionStart () {
    return this.input?.selectionStart
  }

  setCaretPosition (index) {
    this.input.selectionEnd = index
  }

  getValue () {
    return this.input?.value
  }

  setValue (value) {
    this.input.value = value
  }

  getLastKeyBeforeCaret (caretIndex) {
    const [keyData] = this.keys.map(key => ({
      key,
      keyIndex: this.getValue().lastIndexOf(key, caretIndex - 1),
    })).sort((a, b) => b.keyIndex - a.keyIndex)
    return keyData
  }

  searchMention (caretIndex, keyIndex) {
    if (keyIndex !== -1) {
      const searchText = this.getValue().substring(keyIndex + 1, caretIndex)

      return searchText
    }
    
    return null
  }

  insertMention (start: number, end: number, participant: Participant) {
    const { id, name, userName } = participant
    const text = `${`${this.getValue().slice(0, start) + userName} `}${  this.getValue().slice(end, this.getValue().length)}`

    this.setValue(text)
    this.input.focus()

    this.addMention({
      userId: id,
      name,
      userName
    })

    this.setCaretPosition(start + userName.length + 1)
  }
}
