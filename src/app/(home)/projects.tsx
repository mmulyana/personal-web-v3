import CardProject, { Project } from '@/shared/card-project'
import CardWrapper from '@/shared/card-wrapper'

let projects: Project[] = [
  {
    name: 'Ngajiaja',
    description: 'Private tutor',
    url: 'http://localhost:3000/',
    image: '/projects/ngajiaja.png',
    stacks: ['/tech/vite.svg', '/tech/tailwind.svg'],
    detail: 'http://localhost:3000/project/ngajiaja',
    github: null,
    status: 'FEATURED',
  },
  {
    name: 'Bookmark v2',
    description: 'Save favorite in one app',
    url: 'http://localhost:3000/',
    image: '/projects/bookmark-v2.png',
    stacks: ['/tech/vite.svg', '/tech/tailwind.svg'],
    detail: 'http://localhost:3000/project/bookmark-v2',
    github: 'http://localhost:3000',
    status: 'FEATURED',
  },
]

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
          <CardProject title='Last Project' project={projects[1]} />
          <CardWrapper title='All Projects' type='TRANSPARENT'>
            <div className='px-6'>
              
            </div>
          </CardWrapper>
        </div>
      </div>
    </>
  )
}
