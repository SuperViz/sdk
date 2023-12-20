export class AutoCompleteHandler {
  constructor () {
    this.input = null
    this.mentions = []
  }

  private keys = ['@']
  private event: InputEvent
  private input: HTMLTextAreaElement
  private key: string | number
  private oldKey: string | number
  private mentions: { userId: string, name: string, position: { start: number, end: number } }[]

  setInput (event: InputEvent) {
    this.event = event
    this.input = event.target as HTMLTextAreaElement

    this.oldKey = this.key
    this.key = event.data
  }

  addMention (mention: { userId: string, name: string, position: { start: number, end: number } }) {
    this.mentions = [...this.mentions, mention]
  }

  removeMention (mention) {
    this.mentions = this.mentions.filter(m => m.name !== mention.name)

    // also replace the text
    const text = this.getValue().slice(0, mention.position.start - 1) + this.getValue().slice(mention.position.end, this.getValue().length)
    this.setValue(text)
    // set position
    this.setCaretPosition(mention.position.start)
    console.log('mention deleted', this.mentions)
  }

  clearMentions () {
    this.mentions = []
  }

  getSelectionStart () {
    return this.input.selectionStart
  }

  setCaretPosition (index) {
    this.input.selectionEnd = index
  }

  getValue () {
    return this.input.value
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
      const existingMention = this.mentions.find(mention => mention.position.start >= keyIndex + 1 && mention.position.end > caretIndex)
      if (existingMention) {
        this.removeMention(existingMention)
        return null
      }

      return searchText
    }
    
    if (this.mentions.length > 0) {
      this.clearMentions()
    }

    return null
  }

  insertMention (start: number, end: number, participant: any) {
    const { name } = participant
    const text = this.getValue().slice(0, start) + name + this.getValue().slice(end, this.getValue().length)
    this.setValue(`${text  } `)
    this.input.focus()
    this.setCaretPosition(start + name.length + 1)

    this.addMention({
      userId: participant.userId,
      name,
      position: {
        start,
        end: start + name.length,
      }
    })

    console.log('mention added', this.mentions)
  }
}