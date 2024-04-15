import { Project } from '@/model/model-project'

let projects: Project[] = [
  {
    id: 1,
    name: 'Ngajiaja',
    description:
      'Tutoring platform for Quranic education. Collaborating with other developers',
    url: 'https://ngajiaja.com/',
    image: 'ngajiaja.png',
    stacks: ['react.svg', 'vite.svg', 'tailwind.svg', 'react-query.svg'],
    github: null,
    status: 'FEATURED',
  },
  {
    id: 2,
    name: 'Bookmark v2',
    description:
      'bookmark your favorite websites, articles, and resources in one app',
    url: 'https://bookmark-v2.vercel.app/',
    image: 'bookmark-v2.png',
    stacks: ['react.svg', 'typescript.svg', 'tailwind.svg'],
    github: 'https://github.com/mmulyana/bookmark-v2',
    status: 'FEATURED',
  },
  {
    id: 3,
    name: 'Hotflix',
    description:
      'Hotflix is movie app built with next.js, firebase, and tmdb API',
    url: 'https://hotflix-next.vercel.app/',
    image: 'hotflix.png',
    stacks: ['nextjs.svg', 'tailwind.svg', 'firebase.svg'],
    github: 'https://github.com/mmulyana/hotflix',
    status: 'LAST',
  },
  {
    id: 4,
    name: 'BJS company profile',
    description: 'company profile',
    url: null,
    image: '',
    stacks: ['typescript.svg', 'nextjs.svg', 'tailwind.svg'],
    github: 'https://github.com/mmulyana/bjs-company-profile',
    status: 'PROGRESS',
  },
  {
    id: 5,
    name: 'Kaffah',
    description: 'Pray tracker and analytic',
    url: null,
    image: '',
    stacks: ['nextjs.svg', 'typescript.svg','tailwind.svg'],
    github: 'https://github.com/mmulyana/kaffah',
    status: 'PROGRESS',
  },
]

export { projects }
