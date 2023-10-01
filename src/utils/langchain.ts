import { HuggingFaceInference } from 'langchain/llms/hf'
import { HuggingFaceInferenceEmbeddings } from 'langchain/embeddings/hf'

const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY as string

export const model = new HuggingFaceInference({
	// model: "gpt2",
	apiKey,
})
