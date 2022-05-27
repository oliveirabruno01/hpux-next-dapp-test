import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { Header } from '../components/header/Header'

import bannerImg from '../public/images/wild_night_club_by_arsenixc_dalmmwa.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homem Primata Underground NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.imageBanner}>
        <Image
        src={bannerImg}
        layout="responsive"/>
      </div>

      <main className={styles.main}>
        <h2 className={styles.welcome}>SEJAM BEM VINDOS AO<br></br>ENCONTRO DOS HOMENS PRIMATAS</h2>
      </main>
    </div>
  )
}

export default Home
