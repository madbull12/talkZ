import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'

function MyApp({ Component, pageProps:{ session,...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className='bg-[#0F172A] min-h-screen'>
        <Header />
        <Component {...pageProps} />
      </main>
    

    </SessionProvider>
  )
}

export default MyApp
