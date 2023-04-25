
export type Props = {
  children: React.ReactNode
  className?: string
}

export default function Button({ className, children }: Props) {

  return (
    <button className={className}>
      <span>{children}</span>
    </button>
  )
}