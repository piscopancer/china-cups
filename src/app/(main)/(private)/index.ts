import useSearchParams from '@/hooks/useSearchParams'
import { TNextPage } from '@/utils'

export type THomePage = TNextPage<never, ['prompt']>
export function useHomePageSP() {
	return useSearchParams<THomePage>('/')
}
