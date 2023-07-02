import { format } from 'date-fns'

export default function Message({
  text,
  lastUpdated,
}: {
  text: string
  lastUpdated: string
}) {
  return (
    <div>
      <span className="text-sm opacity-50">
        {format(new Date(lastUpdated), 'd MMM yyyy, kk:mm')}
      </span>
      <p className="bg-blue text-white py-1 px-2 rounded-md max-w-max">
        {text}
      </p>
    </div>
  )
}
