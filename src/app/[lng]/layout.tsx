import '../globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from "recoil";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FullStack Developer',
  description: 'Portafolio de Joel Bolivar.',
}

const RootLayout = ({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params:any
}) => {
    console.log({
        lng,
        dir: dir(lng)
    })
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export async function generateStaticParams() {
  return languages.map((lng:string) => ({ lng }))
}

export default RootLayout

