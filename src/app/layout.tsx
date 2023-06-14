
import './globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FullStack Developer',
  description: 'Portafolio de Joel Bolivar.',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
