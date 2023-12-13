import { cn } from '@/utils'

type Status = 'DEFAULT' | 'WARNING'
type Size = 'NORMAL' | 'SMALL'

type Props = {
  status: Status
  text: string
  size: Size
}

export default function StatusTitle({ status, text, size }: Props) {
  return (
    <div className='flex gap-2 items-center'>
      <div className={cn(Statuses[status], 'w-1.5 h-1.5 rounded-full')} />
      <p className={cn(Sizes[size], 'text-white/70')}>{text}</p>
    </div>
  )
}

type Object = {
  [key: string]: string
}

const Statuses: Object = {
  DEFAULT: 'bg-[#628FFF] shadow-[0_0_4px_0_rgb(90,134,246)]',
}

const Sizes: Object = {
  NORMAL: 'text-sm',
  SMALL: 'text-xs',
}
