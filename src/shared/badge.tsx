import { cn } from '@/utils'

type Status = 'DEFAULT'
type Props = {
  text: string
  type: Status
}

export default function Badge(props: Props) {
  return (
    <div className={cn('rounded-full px-2 py-0.5 flex', badgeType[props.type])}>
      <span className={cn(textType[props.type], 'text-xs m-0 mb-0.5')}>{props.text}</span>
    </div>
  )
}

const badgeType = {
  DEFAULT: 'bg-[#1C1C1C]',
}

const textType = {
  DEFAULT: 'text-white',
}
