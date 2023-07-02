export default function Conversation() {
  return (
    <>
      <div className="p-4 border-b">
        <h1>Conversation Name</h1>
      </div>
      <div className="p-10 overflow-y-auto grow flex flex-col-reverse">
        <p>message 1</p>
        <p>message 2</p>
        <p>message 3</p>
        <p>message 4</p>
      </div>
      <form className="sticky bottom-0 flex gap-2 p-4 border-t">
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
