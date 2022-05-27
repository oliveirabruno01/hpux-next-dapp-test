import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Header } from '../components/header/Header'

import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div>
      <Header/>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
