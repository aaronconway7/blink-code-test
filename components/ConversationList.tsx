'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useMemo } from 'react'
import useSWR from 'swr'
import { compareDesc } from 'date-fns'
import { Conversation as ConversationType } from '@/types/ConversationTypes'

export default function ConversationList() {
  const params = useParams()
  const { data, error, isLoading } =
    useSWR<ConversationType[]>('/api/conversations')
  const conversations = useMemo(
    () =>
      data?.sort((a: ConversationType, b: ConversationType) =>
        compareDesc(new Date(a.last_updated), new Date(b.last_updated))
      ) || [],
    [data]
  )

  if (error) return <p>there is an erro!</p>
  if (isLoading) return <p>loading...</p>

  return (
    <div>
      <h2 id="list-title" className="p-4 font-bold border-b">
        Conversations
      </h2>
      <ul aria-labelledby="list-title">
        {conversations.map((conversation: ConversationType) => (
          <li className="border-b" key={conversation.id}>
            <Link
              className="block py-4 px-6 hover:bg-blue-light hover:text-blue aria-[current=page]:bg-blue aria-[current=page]:text-white focus-within:outline-[#f9b133]"
              href={`/${conversation.id}`}
              aria-current={
                params.conversationId === conversation.id ? 'page' : false
              }
            >
              {conversation.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
