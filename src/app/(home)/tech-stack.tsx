import CardWrapper from '@/shared/card-wrapper'
import Image from 'next/image'

const stacks = [
  'firebase.svg',
  'github.svg',
  'tailwind.svg',
  'typescript.svg',
  'vite.svg',
  'react.svg',
  'nodejs.svg',
  'nextjs.svg',
  'redux.svg',
]

const newStacks = Array.from(
  { length: 40 },
  (_, index) => stacks[index % stacks.length]
)

export default function TechStack() {
  return (
    <CardWrapper
      title='My tech stack'
      type='DEFAULT'
      className='mt-16 hover:shadow-[0_4px_120px_13px_rgba(119,119,119,0.12)]'
      isLightActive
    >
      <div className='h-24 bg-[#222222] rounded-[10px] overflow-x-hidden relative flex justify-center gap-10'>
        {newStacks.map((stack, index) => (
          <Image
            key={index}
            src={'/tech/' + stack}
            alt='tech stack'
            width={40}
            height={40}
            className='animate-marquee whitespace-nowrap select-none'
          />
        ))}
        <div className='absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#1b1b1b] to-[#222]/0' />
        <div className='absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#1b1b1b] to-[#222]/0' />
      </div>
    </CardWrapper>
  )
}
