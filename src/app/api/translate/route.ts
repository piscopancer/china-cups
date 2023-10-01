import { NextRequest, NextResponse } from 'next/server'
import { pipeline, QuestionAnsweringPipeline, QuestionAnsweringResult, TranslationPipeline } from '@xenova/transformers'

export type TTranslationResponse = {
	translation: string
	explanation: string
}[]

export async function GET(request: NextRequest) {
	const sourceText = request.nextUrl.searchParams.get('src_text')
	if (!sourceText) {
		return NextResponse.json(
			{
				error: 'Missing text',
			},
			{ status: 400 },
		)
	}
	// const translator = await PipelineSingleton.getInstance()
	const translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M')
	const translations = (await translator(sourceText, {
		src_lang: 'rus_Cyrl',
		tgt_lang: 'zho_Hans',
		num_beams: 5,
		num_return_sequences: 5,
	})) as { translation_text: string }[]
	// console.log(translations)

	const explanator = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad')
	const translationWithExplanation: TTranslationResponse = await Promise.all(
		translations.map(async ({ translation_text }) => {
			const explanation = (await explanator(
				`Пожалуйста, объясни следующий перевод: ${translation_text}`,
				`Текст оригинала на русском языке: ${sourceText}. Текст перевода на китайском языке: ${translation_text}`,
			)) as QuestionAnsweringResult
			return {
				translation: translation_text,
				explanation: explanation.answer,
			}
		}),
	)
	console.log(translationWithExplanation)

	return NextResponse.json(translationWithExplanation)
}
