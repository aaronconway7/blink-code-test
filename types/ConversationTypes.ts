export interface Conversation {
  id: string
  last_updated: string
  name: string
  messages: Message[]
}

export interface Message {
  id: string
  text: string
  last_updated: string
}
