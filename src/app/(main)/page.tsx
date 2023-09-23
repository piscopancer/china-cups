import { GiTeapot } from 'react-icons/gi'
import { THomePage } from './(private)'
import PromptInput from './(private)/prompt-input'
import { projectInfo } from '@/data/project'
import { BiLogoGithub } from 'react-icons/bi'
import axios from 'axios'

export default async function HomePage({ searchParams }: THomePage) {
	const text = 'Hello'
	const translation = await axios.get(`http://localhost:3000/api/translate?text=${text}`).then((res) => res.data)
	return (
		<div className='flex'>
			<aside className='flex h-screen flex-col items-center border-r-2 border-gray-300'>
				<div className='bg-gray-250 flex aspect-square w-full items-center justify-center'>
					<GiTeapot className='h-8 w-8 fill-gray-500' />
				</div>
				<div className='mt-auto p-4'>
					<a
						className='flex h-12 w-12 items-center justify-center rounded-md duration-200 hover:bg-gray-300'
						href={`https://github.com/${projectInfo.creator.nickname}/${projectInfo.social.github}`}
						target='_blank'
					>
						<BiLogoGithub className='h-8 w-8 fill-gray-600' />
					</a>
				</div>
			</aside>
			<main className='flex-1 px-20 max-md:px-4'>
				<h1 className='mt-12 text-center text-2xl font-bold '>China Cups</h1>
				<div className='mx-auto mt-20 max-w-screen-lg'>
					<PromptInput />
					<p>{translation}</p>
				</div>
			</main>
		</div>
	)
}
