import { projects } from '@/data/data-projects'
import Badge from '@/shared/badge'
import CardProject from '@/shared/card-project'
import CardWrapper from '@/shared/card-wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <div className='mt-14 flex flex-col gap-6'>
        {projects
          .filter((project) => project.status === 'FEATURED')
          .map((project, index) => (
            <CardProject
              key={index}
              title='Featured Project'
              project={project}
            />
          ))}
        <div className='grid grid-cols-1 lg:grid-cols-[576px_1fr] gap-5'>
          <CardProject
            title='Last Project'
            project={projects.filter((project) => project.status === 'LAST')[0]}
            isSmall
          />
          <CardWrapper title='All Projects' type='TRANSPARENT'>
            <div className='px-3 flex flex-col gap-4 pb-3'>
              {projects
                .filter(
                  (project) =>
                    project.status !== 'FEATURED' && project.status !== 'LAST'
                )
                .map((project) => (
                  <div
                    key={project.id}
                    className='flex justify-between items-center'
                  >
                    <div>
                      <div className='flex gap-1 items-center'>
                        <Link
                          href={'/project/' + project.id}
                          className='font-medium text-white pb-1'
                        >
                          {project.name}
                        </Link>
                        {!!project.github && (
                          <Link href={project.github} target='_blank'>
                            <Image
                              src='/tech/github.svg'
                              alt='link'
                              width={20}
                              height={20}
                            />
                          </Link>
                        )}
                        {project.status === 'PROGRESS' && (
                          <Badge text='work in progress' type='DEFAULT' />
                        )}
                      </div>
                      <p className='text-xs text-white/40'>
                        {project.description}
                      </p>
                    </div>
                    {!!project.url && (
                      <Link
                        href={project.url}
                        className='text-white/40 text-sm'
                      >
                        View live
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </CardWrapper>
        </div>
      </div>
    </>
  )
}
