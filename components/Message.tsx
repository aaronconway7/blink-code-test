import { format } from 'date-fns'

export default function Message({
  text,
  lastUpdated,
  handleTextClick,
}: {
  text: string
  lastUpdated: string
  handleTextClick: () => void
}) {
  return (
    <div>
      <span className="text-sm opacity-50">
        {format(new Date(lastUpdated), 'd MMM yyyy, kk:mm')}
      </span>
      <button
        className="block bg-blue hover:bg-blue-dark text-white py-1 px-2 rounded-md max-w-max focus-within:outline-gold"
        onClick={handleTextClick}
        aria-label={`${text}, click to edit`}
      >
        {text}
      </button>
    </div>
  )
}
