import GithubIcon from '@/assets/icons/github'
import LinkedinIcon from '@/assets/icons/linkedin'
import StatusTitle from '@/shared/status-title'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-between items-start gap-4 md:items-center pt-8'>
				<div className='flex gap-4 items-center'>
					<div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#2F2F2F]'>
						<Image src='/logo.png' alt='logo' width={32} height={32} />
					</div>
					<div className='flex flex-col gap-1'>
						<p className='text-white'>Mulyana</p>
						<StatusTitle
							status='DEFAULT'
							size='NORMAL'
							text='Available for work'
						/>
					</div>
				</div>
				<div className='flex gap-4 items-center'>
					<Link
						href='https://www.linkedin.com/in/mmulyana'
						target='_blank'
						className='flex gap-2 text-white items-center'
					>
						<LinkedinIcon />
						<span className='text-white/80 hover:text-white'>Linkedin</span>
					</Link>
					<Link
						href='https://github.com/mmulyana'
						target='_blank'
						className='flex gap-2 items-center text-white'
					>
						<GithubIcon />
						<span className='text-white/80 hover:text-white'>Github</span>
					</Link>
				</div>
			</div>
			<div className='mt-14'>
				<p className='max-w-[460px] text-lg md:text-xl text-white/60'>
					<span className='text-white font-medium'>
						Junior Software Engineer
					</span>{' '}
					based in Indonesia and final year student at Ahmad Dahlan University
				</p>
			</div>
		</>
	)
}
