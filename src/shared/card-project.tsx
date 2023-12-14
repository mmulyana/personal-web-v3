import Link from 'next/link'
import CardWrapper from './card-wrapper'
import Image from 'next/image'

export type Project = {
  name: string
  image: string
  description: string
  url: string
  stacks: string[]
  github: null | string
  detail: string
  status: 'FEATURED' | 'LAST' | 'DEFAULT' | 'PROGRESS'
}

type Props = {
  title: string
  project: Project
}

export default function CardProject(props: Props) {
  return (
    <CardWrapper
      title={props.title}
      type='DEFAULT'
      className='hover:shadow-[0_4px_120px_13px_rgba(119,119,119,0.12)] card-project overflow-hidden'
    >
      <div className='bg-[#222222] rounded-[10px] pt-5 px-8 max-h-[463px] overflow-hidden'>
        <div className='flex justify-between items-start'>
          <div>
            <Link
              href={props.project.detail}
              className='font-medium text-white'
            >
              {props.project.name}
            </Link>
            <p className='text-sm text-white/60 mt-2'>
              {props.project.description}
            </p>
            <div className='mt-4 flex gap-4 items-center'>
              <div className='flex'>
                {props.project.stacks.map((stack, index) => (
                  <Image
                    key={index}
                    src={stack}
                    width={32}
                    height={32}
                    alt='tech stack'
                  />
                ))}
              </div>
              {!!props.project.github && (
                <>
                  <div className='w-1 h-1 rounded-full bg-[#D9D9D9]' />
                  <Link
                    href={props.project.github}
                    className='flex gap-2 items-center'
                  >
                    <p className='text-sm text-white/60'>
                      View on <span className='text-white'>Github</span>
                    </p>
                    <Image
                      src='/tech/github.svg'
                      width={24}
                      height={24}
                      alt='github url'
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
          <Link
            href={props.project.url}
            target='_blank'
            className='flex gap-0.5 items-center'
          >
            <span className='text-white/60 hover:text-white text-sm'>
              View live
            </span>
            <Image
              src='./icon/link-external.svg'
              alt={`link to ${props.project.name}`}
              width={24}
              height={24}
            />
          </Link>
        </div>
        <Image
          src={props.project.image}
          alt='image'
          width={1200}
          height={800}
          className='rounded-t-2xl mt-4 opacity-50 blur-[0.8px] duration-200 card-project__thumbnail relative top-5'
        />
      </div>
    </CardWrapper>
  )
}
