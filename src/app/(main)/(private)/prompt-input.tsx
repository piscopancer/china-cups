'use client'

import Link from 'next/link'
import React from 'react'
import { BiArrowToRight, BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'

export default function PromptInput() {
	return (
		<div className='rounded-md border-2 border-gray-300 shadow-md shadow-gray-300/50'>
			<textarea placeholder='Введите фразу на русском...' className='block w-full resize-none bg-transparent p-6 font-medium outline-none placeholder:font-medium placeholder:text-gray-400' />
			<div className='bg-gray-250 flex justify-end p-2'>
				<Link href={'/'} className='flex h-10 w-fit items-center rounded-md px-6 duration-200 hover:bg-gray-300'>
					<BiRightArrowAlt className='h-5 w-5 fill-gray-600' />
				</Link>
			</div>
		</div>
	)
}
