import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

function MyApp({ Component, pageProps:{ session,...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
          <main className='bg-[#0F172A] min-h-screen '>
  

            <Header />
           
            <Component {...pageProps} />
          </main>
        

        </SessionProvider>
    </ApolloProvider>
  
  )
}

export default MyApp
