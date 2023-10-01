'use client'

import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useHomeSP } from '.'
import { useState } from 'react'

export default function TextInput() {
	const homeSP = useHomeSP()
	const [text, setText] = useState('')

	function onTranslateClick() {
		homeSP.set('src_text', text)
	}

	return (
		<div className='rounded-md border-2 border-gray-300 shadow-md shadow-gray-300/50'>
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Введите фразу на русском...'
				className='block min-h-[4rem] w-full resize-y bg-transparent p-4 font-medium outline-none placeholder:font-medium placeholder:text-gray-400'
			/>
			<div className='flex justify-end bg-gradient-to-r from-gray-250 to-gray-200 p-2'>
				<button
					onClick={onTranslateClick}
					className='flex h-10 w-fit items-center rounded-md border border-gray-300 bg-gradient-to-t from-gray-250 to-gray-200 px-6 hover:bg-gray-300 hover:shadow-inner'
				>
					<BiRightArrowAlt className='h-5 w-5 fill-gray-600' />
				</button>
			</div>
		</div>
	)
}
