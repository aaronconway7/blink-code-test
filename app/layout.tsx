import './globals.css'

import Sidebar from '@/components/Sidebar'
import { SWRProvider } from './swr-provider'

export const metadata = {
  title: 'Blink Code Test - Chat App',
  description: 'Code test for Blink by Aaron Conway: A basic chat application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-10 flex gap-4 h-screen overflow-hidden">
        <SWRProvider>
          <Sidebar />
          <main className="bg-white grow overflow-y-auto flex flex-col rounded-xl shadow-sm">
            {children}
          </main>
        </SWRProvider>
      </body>
    </html>
  )
}
