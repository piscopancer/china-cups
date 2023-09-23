import { Pipeline, pipeline } from '@xenova/transformers'
import { PretrainedOptions } from '@xenova/transformers/types/models'

function DeclarePipeline() {
	return class PipelineSingleton {
		static task = 'question-answering'
		static model = undefined as undefined | string
		static instance = null as null | Promise<Pipeline>

		static async getInstance(options?: PretrainedOptions) {
			if (!this.instance) {
				this.instance = pipeline(this.task, this.model, options)
			}
			return this.instance
		}
	}
}

export const PipelineSingleton = (() => {
	if (process.env.NODE_ENV !== 'production') {
		const gl = global as any
		if (!gl.PipelineSingleton) {
			gl.PipelineSingleton = DeclarePipeline()
		}
		return gl.PipelineSingleton
	}
	return DeclarePipeline()
})() as ReturnType<typeof DeclarePipeline>
