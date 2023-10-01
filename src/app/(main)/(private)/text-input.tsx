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
				className='block w-full resize-none bg-transparent p-6 font-medium outline-none placeholder:font-medium placeholder:text-gray-400'
			/>
			<div className='flex justify-end bg-gray-250 p-2'>
				<button onClick={onTranslateClick} className='flex h-10 w-fit items-center rounded-md px-6 duration-200 hover:bg-gray-300'>
					<BiRightArrowAlt className='h-5 w-5 fill-gray-600' />
				</button>
			</div>
		</div>
	)
}
