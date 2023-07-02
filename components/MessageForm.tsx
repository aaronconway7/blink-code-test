export default function MessageForm({
  messageInput,
  setMessageInput,
  submitText,
  handleSubmit,
}: {
  messageInput: string
  setMessageInput: (value: string) => void
  submitText: string
  handleSubmit: (event: React.SyntheticEvent) => void
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 flex gap-2 p-4 border-t"
    >
      <label htmlFor="message-input" className="sr-only">
        Message
      </label>
      <input
        id="message-input"
        type="text"
        placeholder="Type message here..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded bg-blue-light text-blue font-medium hover:text-blue-dark"
      >
        {submitText}
      </button>
    </form>
  )
}
