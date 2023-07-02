'use client'

import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { useMemo, useState } from 'react'
import { compareAsc } from 'date-fns'
import { nanoid } from 'nanoid'
import {
  Conversation as ConversationType,
  Message as MessageType,
} from '@/types/ConversationTypes'
import Message from '@/components/Message'
import CenteredText from '@/components/CenteredText'
import MessageForm from '@/components/MessageForm'

export default function Conversation() {
  const params = useParams()
  const { data, error, isLoading, mutate } =
    useSWR<ConversationType[]>('/api/conversations')
  const conversation = useMemo(
    () =>
      data?.find((conversation) => conversation.id === params.conversationId),
    [data, params]
  )
  const messages = useMemo(
    () =>
      conversation?.messages.sort((a, b) =>
        compareAsc(new Date(a.last_updated), new Date(b.last_updated))
      ) || [],
    [conversation]
  )
  const [messageInput, setMessageInput] = useState('')
  const [messageEditing, setMessageEditing] = useState<
    MessageType | undefined
  >()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newConversations = data?.map((convo: ConversationType) => {
      if (convo.id !== params.conversationId) return convo
      return {
        ...convo,
        last_updated: new Date().toISOString(),
        messages: messageEditing ? editMessage() : addMessage(),
      }
    })

    await mutate(newConversations, {
      // Setting revalidate to false as this will refetch the json file
      // (which won't have any of the new/edited messages)
      revalidate: false,
    })
    setMessageInput('')
    setMessageEditing(undefined)
  }

  const editMessage = () => {
    return messages.map((message) => {
      if (message.id !== messageEditing?.id) return message
      return {
        ...message,
        text: `${messageInput} (edited)`,
        // purposely not updating last_updated as this would move the position of the message in the conversation
        // last_updated: new Date().toISOString(),
      }
    })
  }

  const addMessage = () => {
    return [
      ...messages,
      {
        id: nanoid(),
        text: messageInput,
        last_updated: new Date().toISOString(),
      },
    ]
  }

  const handleMessageClick = (message: MessageType) => {
    setMessageEditing(message)
    setMessageInput(message.text)
    document.getElementsByTagName('input')[0].focus()
  }

  if (error) return <CenteredText text="Sorry, an error occured." />
  if (isLoading) return <CenteredText text="Loading..." />

  return (
    <>
      <div className="p-4 border-b">
        <h1 id="conversation-name" className="font-bold text-lg">
          {conversation?.name}
        </h1>
      </div>
      <div className="p-10 overflow-y-auto grow flex flex-col-reverse">
        <div
          role="log"
          aria-labelledby="conversation-name"
          className="space-y-5"
        >
          {messages.map((message) => (
            <Message
              text={message.text}
              lastUpdated={message.last_updated}
              key={message.id}
              handleTextClick={() => handleMessageClick(message)}
            />
          ))}
        </div>
      </div>
      <MessageForm
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        submitText={messageEditing ? 'Edit' : 'Send'}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
