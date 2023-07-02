export default function CenteredText({ text }: { text: string }) {
  return (
    <div className="p-10 grow grid place-items-center">
      <p>{text}</p>
    </div>
  )
}
