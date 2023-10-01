import { THomePage } from './(private)'
import TextInput from './(private)/text-input'
import { projectInfo } from '@/data/project'
import { BiLogoGithub } from 'react-icons/bi'
import axios from 'axios'
import { model } from '@/utils/langchain'

export default async function HomePage({ searchParams }: THomePage) {
	// const translationResponse = ''
	const modelResponse = searchParams.src_text ? model.predict(searchParams.src_text) : 'no_text'

	return (
		<div className='flex'>
			<aside className='flex h-screen flex-col items-center border-r-2 border-gray-300'>
				<div className='flex aspect-square w-full items-center justify-center bg-gradient-to-t from-gray-250 to-gray-200 text-xl'>☕</div>
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
					<TextInput />
					{/* {!translationResponse ? (
						<p>текст оригинала пуст</p>
					) : (
						<div>
							{translationResponse.map(({ explanation, translation }, i) => (
								<div>
									<p className='font-bold'>{i + 1}</p>
									<p className='text-lg font-bold'>{translation}</p>
									<p>{explanation}</p>
								</div>
							))}
						</div>
					)} */}
					{modelResponse}
				</div>
			</main>
		</div>
	)
}
