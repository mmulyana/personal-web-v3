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

const newStacks = Array.from({ length: 40 }, (_, index) => stacks[index % stacks.length]);

export default function TechStack() {
  return (
    <CardWrapper title='My tech stack' type='DEFAULT' className='mt-16'>
      <div className='h-24 bg-[#222222] rounded-[10px] overflow-x-hidden relative flex justify-center gap-10'>
        {newStacks.map((stack, index) => (
          <Image
            key={index}
            src={'/tech/'+stack}
            alt='tech stack'
            width={40}
            height={40}
            className='animate-marquee whitespace-nowrap select-none'
          />
        ))}
      </div>
    </CardWrapper>
  )
}
