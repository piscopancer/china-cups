import { Manrope } from 'next/font/google'

const manropeInit = Manrope({ subsets: ['cyrillic', 'latin'] })
export const manrope = manropeInit.className
