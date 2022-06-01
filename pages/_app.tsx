import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
