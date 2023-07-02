import ConversationList from '@/components/ConversationList'

export default function Sidebar() {
  return (
    <aside className="bg-white rounded-xl shadow-sm overflow-y-auto">
      <nav>
        <ConversationList />
      </nav>
    </aside>
  )
}
