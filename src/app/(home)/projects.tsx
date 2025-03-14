import { experiences } from '@/data/data-experience'
import { projects } from '@/data/data-projects'
import CardProject from '@/shared/card-project'
import CardWrapper from '@/shared/card-wrapper'
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
					<CardWrapper title='Experiences' type='TRANSPARENT'>
						<div className='px-3 flex flex-col gap-4 pb-3'>
							{experiences?.map((item, index) => (
								<div
									key={index}
									className='flex justify-between text-white items-center'
								>
									<p className='max-w-[130px] text-sm opacity-60'>
										{item.title}
									</p>
									<div className='text-right'>
										<Link
											href={item.companyLink}
											target='_blank'
											className='text-sm'
										>
											{item.companyName}
										</Link>
										<p className='opacity-50 text-sm'>{item.date}</p>
									</div>
								</div>
							))}
						</div>
					</CardWrapper>
				</div>
			</div>
		</>
	)
}
