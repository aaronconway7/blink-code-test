'use client'

import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { useMemo } from 'react'
import { compareAsc } from 'date-fns'
import { Conversation as ConversationType } from '@/types/ConversationTypes'
import Message from '@/components/Message'
import CenteredText from '@/components/CenteredText'

export default function Conversation() {
  const params = useParams()
  const { data, error, isLoading } =
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
            />
          ))}
        </div>
      </div>
      <form className="sticky bottom-0 flex gap-2 p-4 border-t">
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
