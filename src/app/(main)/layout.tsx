import type { Metadata } from 'next'
import * as fonts from '@/assets/fonts'
import { classes } from '@/utils'
import { projectInfo } from '@/data/project'
import '@/assets/styles/style.scss'

export const metadata: Metadata = {
	title: projectInfo.name,
	description: projectInfo.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru' className='bg-gray-200'>
			<body className={classes(fonts.manrope, '')}>{children}</body>
		</html>
	)
}
