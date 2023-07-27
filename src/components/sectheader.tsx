type HeaderProps = {
  topic: string
}

export default function SectHeader(
  props: React.PropsWithChildren<HeaderProps>
) {
  return (
    <section>
      <h4 className="text-secondary text-sm">• {props.topic}</h4>
      <h3 className="font-bold text-xl">{props.children}</h3>
    </section>
  )
}
