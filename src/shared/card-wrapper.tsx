import { cn } from '@/utils'
import StatusTitle from './status-title'

type Status = 'DEFAULT' | 'TRANSPARENT'

type Props = {
  type: Status
  title: string
  className?: string
  children: React.ReactNode
  isLightActive?: boolean
}

export default function CardWrapper(props: Props) {
  return (
    <div
      className={[
        CardConfigs[props.type],
        props.className ?? '',
        props.isLightActive
          ? 'border-transparent hover:border-[#4E4E4E]'
          : 'border-[#2D2D2D]',
        'border rounded-xl pb-2.5 px-2 pt-3 w-full',
      ].join(' ')}
    >
      <div className='px-2'>
        <StatusTitle size='SMALL' status='DEFAULT' text={props.title} />
      </div>
      <div className='mt-4'>{props.children}</div>
    </div>
  )
}

const CardConfigs = {
  DEFAULT: 'bg-[#2D2D2D]',
  TRANSPARENT: 'bg-[#252424]',
}
