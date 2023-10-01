import useSearchParams from '@/hooks/useSearchParams'
import { TNextPage } from '@/utils'

export type THomePage = TNextPage<never, ['src_text']>
export function useHomeSP() {
	return useSearchParams<THomePage>('/')
}
