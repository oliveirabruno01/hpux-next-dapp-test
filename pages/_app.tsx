import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Header } from '../components/header/Header'

import { useSwipeable } from 'react-swipeable'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(menuIsOpen)

  return (
    <div>
      <Header/>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
