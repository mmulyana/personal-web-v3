import { Project } from '@/model/model-project'

let projects: Project[] = [
	{
		id: 4,
		name: 'Barokah ERP',
		description:
			'This ERP system, integrating modules for HRIS, project management, and inventory management, was developed as a final project/thesis for my bachelor degree',
		url: 'https://erp-stg.barokahjayasemesta.com/?mode=GUEST',
		image: 'bjs.png',
		stacks: ['react.svg', 'vite.svg', 'tailwind.svg', 'react-query.svg'],
		github: 'https://github.com/mmulyana/erp-frontend',
		status: 'FEATURED',
	},
	{
		id: 3,
		name: 'ERP Djava Optic / Urban Azkara Tirtha',
		description:
			'A customized ERP platform featuring integrated modules for Master Data, inventory, Procurement, Sales, And Accounting',
		url: null,
		image: 'djava.png',
		stacks: ['nextjs.svg', 'tailwind.svg', 'react-query.svg'],
		github: null,
		status: 'FEATURED',
	},
	{
		id: 1,
		name: 'Ngajiaja',
		description:
			'A collaborative project building a platform for Quranic tutoring and education.',
		url: 'https://ngajiaja.com/',
		image: 'ngajiaja.png',
		stacks: ['react.svg', 'tailwind.svg'],
		github: null,
		status: 'FEATURED',
	},
	{
		id: 2,
		name: 'Bookmark v2',
		description:
			'A web application for saving and organizing favorite websites, articles, and online resources.',
		url: 'https://bookmark-v2.vercel.app/',
		image: 'bookmark-v2.png',
		stacks: ['react.svg', 'typescript.svg', 'firebase.svg'],
		github: 'https://github.com/mmulyana/bookmark-v2',
		status: 'LAST',
	},
]

export { projects }
