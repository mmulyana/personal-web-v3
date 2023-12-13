import CardProject, { Project } from '@/shared/card-project'

let projects: Project[] = [
  {
    name: 'Ngajiaja',
    description: 'Private tutor',
    url: 'http://localhost:3000/',
    image: '/projects/ngajiaja.png',
    stacks: ['/tech/vite.svg', '/tech/tailwind.svg'],
    detail: 'http://localhost:3000/project/ngajiaja',
    github: null,
  },
  {
    name: 'Bookmark v2',
    description: 'Save favorite in one app',
    url: 'http://localhost:3000/',
    image: '/projects/bookmark-v2.png',
    stacks: ['/tech/vite.svg', '/tech/tailwind.svg'],
    detail: 'http://localhost:3000/project/bookmark-v2',
    github: 'http://localhost:3000',
  },
]

export default function Projects() {
  return (
    <>
      <div className='mt-14 flex flex-col gap-6'>
        {projects.map((project, index) => (
          <CardProject key={index} title='Featured Project' project={project} />
        ))}
      </div>
    </>
  )
}
