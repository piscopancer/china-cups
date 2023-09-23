import { TNextPage } from '@/utils'
import { Route } from 'next'
import { useSearchParams as useNextSearchParams, useRouter } from 'next/navigation'

export default function useSearchParams<P extends TNextPage<string>>(route: Route) {
	const nextSP = useNextSearchParams()
	const router = useRouter()
	const url = new URLSearchParams(nextSP.toString())
	const updateRoute = () => router.push(`${route}?${url}`, { scroll: false })
	function set(key: keyof P['searchParams'], value: string) {
		url.set(key as string, value)
		updateRoute()
	}
	function unset(key: keyof P['searchParams']) {
		url.delete(key as string)
		updateRoute()
	}
	function get(key: keyof P['searchParams']) {
		return url.get(key as string)
	}
	return { set, unset, get } as const
}
