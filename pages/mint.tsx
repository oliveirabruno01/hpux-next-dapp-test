import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Head from 'next/head'

import styles from '../styles/Mint.module.scss'

type CardProps = {
    children?: JSX.Element | JSX.Element[],
}

const Card = (props: CardProps) => {
    return (
        <div className={styles.card}>{props.children}</div>
    )
}

Card.Title = (props: CardProps) => <div className={styles.cardTitle}>{props.children}</div>
Card.Content = (props: CardProps) => <div className={styles.cardContent}>{props.children}</div>

const Mint: NextPage = () => {
    const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
        ssr: false,
});
    return (
        <div className={styles.container}>
            <Head>
                <title>Homem Primata Underground NFT</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.menu}>
                <span onClick={() => {console.log("Hi")}}>
                    <Link href="/"><a href="">
                        <h2>VOLTAR</h2>
                    </a></Link>
                </span>

                <Card>
                    <Card.Title><h3>Lorem, ipsum dolor.</h3></Card.Title>
                    <Card.Content><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4></Card.Content>
                </Card>

                <Card>
                    <Card.Title><h3>Lorem, ipsum dolor.</h3></Card.Title>
                    <Card.Content><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4></Card.Content>
                </Card>

                <Card>
                    <Card.Title><h3>Lorem, ipsum dolor.</h3></Card.Title>
                    <Card.Content><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4></Card.Content>
                </Card>

                <Card>
                    <Card.Title><h3>Lorem, ipsum dolor.</h3></Card.Title>
                    <Card.Content><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4></Card.Content>
                </Card>

                <Card>
                    <Card.Title><h3>Lorem, ipsum dolor.</h3></Card.Title>
                    <Card.Content><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4></Card.Content>
                </Card>
            </div>
            <MapWithNoSSR/>
        </div>
    )
}

export default Mint;