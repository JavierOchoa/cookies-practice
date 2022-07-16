import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

export const Layout:FC = ({ children }) => {
  return (
    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </Head>
        <nav>
            <Navbar />
        </nav>
        <main style={{ padding: '20px 50px' }}>
            { children }
        </main>
    
    </>
  )
}
