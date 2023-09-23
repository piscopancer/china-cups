import { NextRequest, NextResponse } from 'next/server'
import { PipelineSingleton } from '@/utils/pipeline'

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
	const translator = await PipelineSingleton.getInstance()
	const translation = await translator(text)
	console.log(translation) // undefined
	return NextResponse.json(translation)
}
