import { NextRequest, NextResponse } from 'next/server'
import { PipelineSingleton } from '@/utils/pipeline'
import { pipeline } from '@xenova/transformers'

export async function GET(request: NextRequest) {
	const text = request.nextUrl.searchParams.get('text')
	if (!text) {
		return NextResponse.json(
			{
				error: 'Missing text',
			},
			{ status: 400 },
		)
	}
	// const translator = await PipelineSingleton.getInstance()
	const translator = await pipeline('question-answering')
	const translation = await translator('Can I use your phone to call my mum?')
	console.log(translation) // undefined, IDK why
	return NextResponse.json('if you put any text here, it is working fine. The problem is the response being undefined 😟.')
}
