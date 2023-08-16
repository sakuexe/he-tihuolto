import type { PropsWithChildren } from 'react'

type HeaderProps = {
  topic: string
}

export default function SectionHeader(props: PropsWithChildren<HeaderProps>) {
  return (
    <section>
      <h4 className="text-secondary-300 text-sm">• {props.topic}</h4>
      <h3 className="font-bold text-xl">{props.children}</h3>
    </section>
  )
}
