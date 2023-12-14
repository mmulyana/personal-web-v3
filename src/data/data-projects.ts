import { Project } from '@/model/model-project'

let projects: Project[] = [
  {
    id: 1,
    name: 'Ngajiaja',
    description:
      'Tutoring platform for Quranic education. Collaborating with other developers',
    url: null,
    image: 'ngajiaja.png',
    stacks: ['react.svg', 'vite.svg', 'tailwind.svg'],
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
    name: 'MySubss',
    description: 'subscription manager',
    url: null,
    image: 'mysubss.png',
    stacks: ['typescript.svg', 'tailwind.svg'],
    github: 'https://github.com/mmulyana/my-subss',
    status: 'PROGRESS',
  },
  {
    id: 5,
    name: 'Movie List',
    description: 'movie application with tmdb API',
    url: 'https://movie-binar-kel-5.vercel.app',
    image: 'movielist.png',
    stacks: ['reactjs.svg'],
    github: 'https://github.com/mmulyana/movie-binar-kel-5',
    status: 'DEFAULT',
  },
]

export { projects }
