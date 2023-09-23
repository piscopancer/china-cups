import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'gray-250': '#DBDEE3',
				'gray-350': '#B6BCC5',
			},
		},
	},
	plugins: [],
}
export default config
