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

  getMentions () {
    return this.mentions
  }

  setMentions (mentions) {
    this.mentions = mentions.map(mention => ({
      ...mention,
      position: JSON.parse(mention.position)
    }))
  }

  addMention (mention: { userId: string, name: string, position: { start: number, end: number } }) {
    this.mentions = [...this.mentions, mention]
  }

  removeMention (mention) {
    const isDeletion = (this.event.inputType === "deleteContentBackward" || this.event.inputType === 'deleteContentForward' || this.event.inputType === 'deleteWordBackward' || this.event.inputType === "deleteByCut")
    this.mentions = this.mentions.filter(m => m.position.start !== mention.position.start && m.position.end !== mention.position.end)

    if (isDeletion) {
      this.setValue(this.getValue().slice(0, mention.position.start) + this.getValue().slice(mention.position.end, this.getValue().length))
      this.setCaretPosition(mention.position.start + 1)
      this.updateMentionsAfterDeletion(mention.name.length)
      return
    }

    this.setValue(this.getValue().slice(0, mention.start) + this.getValue().slice(mention.end, this.getValue().length))
    this.setCaretPosition(mention.start + 1)

    this.updateMentionsAfterDeletion(mention.name.length)
  }

  updateMentionsAfterDeletion (mentionSize: number) {
      this.mentions = this.mentions.map(m => {
      const position = this.getSelectionPosition()

      const newPosition = {
        start: m.position.start - mentionSize - 1,
        end: m.position.end - mentionSize - 1,
      }

      if (position.start > m.position.start) {
        return m
      }

      return {
        ...m,
        position: newPosition
      }
    })
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
    const existingMention = this.mentions.find(mention => mention.position.start <= caretIndex && caretIndex <= mention.position.end)
    
    if (existingMention && caretIndex === existingMention.position.start) {
      return null
    }

    if (existingMention) {
      this.removeMention(existingMention)
      return null
    }

    if (keyIndex !== -1) {
      const searchText = this.getValue().substring(keyIndex + 1, caretIndex)

      return searchText
    }

    return null
  }

  updateMentionPositions () {
    const isDeletion = (this.event?.inputType === "deleteContentBackward" || this.event?.inputType === 'deleteContentForward' || this.event.inputType === 'deleteWordBackward' || this.event?.inputType === "deleteByCut")

    this.mentions = this.mentions.map((mention) => {
      const { start, end } = mention.position
      const position = this.getSelectionPosition()

      const newPosition = {
        start,
        end
      }

      if (position.start < start) {
        newPosition.start = isDeletion ? start - 1 : start + 1
        newPosition.end = isDeletion ? end - 1 : end + 1
      }

      return {
        ...mention,
        position: newPosition
      }
    })

    this.mentions = this.mentions.filter(mention => {
      const { start, end } = mention.position
      const text = this.getValue().substring(start, end)

      return text !== ''
    })

    console.log('start', this.mentions.map(item => item.position.start))
    console.log('end', this.mentions.map(item => item.position.end))
  }

  insertMention (start: number, end: number, participant: any) {
    const { id, name } = participant
    const position = {
      start: start - 1,
      end: start + name.length,
    }
    const text = this.getValue().slice(0, start) + name + this.getValue().slice(end, this.getValue().length)

    this.setValue(text)
    this.input.focus()

    this.addMention({
      userId: id,
      name,
      position
    })

    this.addBlankSpace()
    this.setCaretPosition(start + name.length + 1)
  }

  addBlankSpace () {
    const caretIndex = this.getSelectionStart()

    this.setValue(`${this.getValue().slice(0, caretIndex)} ${this.getValue().slice(caretIndex, this.getValue().length)}`)
    this.updateMentionPositions()
    this.input.focus()
  }

}
