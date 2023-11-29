import './globals.css'
import './styles/mdx.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, JetBrains_Mono } from 'next/font/google'

import { Providers } from '@/components/providers'

import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'OpenTech',
  description: 'Website for my PAP.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${inter.variable} font-inter`}
      >
        <Providers>
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
