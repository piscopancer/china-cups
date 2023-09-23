export function classes(...classes: (string | false | undefined)[]): string {
	return (classes.filter(Boolean) as string[]).reduce((prev, current) => `${prev} ${current}`)?.replace(/false|undefined/g, '')
}

export type TNextPage<ParamsAlias extends string | never = never, SearchParams extends string[] = []> = {
	params: ParamsAlias extends never ? never : Record<ParamsAlias, string>
	searchParams: Record<SearchParams[number], string | null>
}
