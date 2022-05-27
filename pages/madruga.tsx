import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Madruga.module.scss'

import { Header } from '../components/header/Header'

const Madruga: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Homem Primata Underground NFT</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header></Header>

            <main className={styles.main}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi amet cupiditate exercitationem commodi minus odit consequuntur? Quis velit eos impedit nostrum laboriosam fugiat commodi magni, corrupti cumque illum repudiandae autem dolorem ullam ab, odit consectetur harum? Eius, laudantium fugit. Molestias eius soluta explicabo totam nemo, repellat aspernatur debitis distinctio quod quae eos tenetur quibusdam maxime porro a eveniet sed quas rerum fuga animi placeat deleniti amet. Animi doloremque impedit accusantium expedita itaque? Enim, doloribus! Sapiente eos impedit quod voluptatibus, omnis voluptate facere, numquam ullam rerum suscipit neque ratione nisi dolorum. Nulla unde, quia quaerat incidunt adipisci dicta reiciendis dolorem.</h2>    
            </main>
        </div>
    )
}

export default Madruga;