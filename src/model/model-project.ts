export type Project = {
	name: string
	image: string
	description: string
	url: string | null
	stacks: string[]
	github: null | string
	status: 'FEATURED' | 'LAST' | 'DEFAULT' | 'PROGRESS'
	id: number
}

export type Experience = {
	title: string
	companyName: string
	companyLink: string
	date: string
}
