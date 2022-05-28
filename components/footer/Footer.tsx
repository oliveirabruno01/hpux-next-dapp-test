import Link from "next/link"
import Image from "next/image"
import React from "react"

import styles from "./Footer.module.scss"

import trainImg from "../../public/images/crazy_train3.png"

type Props = {
    href: string,
    children?: JSX.Element,
}

export const LinkItem: React.FC<Props> = ({
    href,
    children,
}) => (
    <Link href={href}>
        <a>{children}</a>
    </Link>
)

export function Footer() {
    return (
        <div className={styles.footer}>
            <Image src={trainImg} className={styles.train}></Image>
            <div className={styles.container}>
                <div className={styles.vision}>
                    <h2>A Música é de todo mundo!</h2>
                </div>
                <div className={styles.links}>
                    <ul>
                        <LinkItem href="/"><li>EMITIR NFT</li></LinkItem>
                        <LinkItem href="/"><li>Sobre</li></LinkItem>
                        <LinkItem href="/madruga"><li>Madruga Blues</li></LinkItem>
                        <LinkItem href="/"><li>Roadmap</li></LinkItem>
                    </ul>
                    <ul>
                        <LinkItem href="www.twitter.com"><li>Twitter</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>TikTok</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>Instagram</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>Youtube</li></LinkItem>
                    </ul>
                    <ul>
                        <LinkItem href="www.twitter.com"><li>block.explorer</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>nftexpo.io</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>opensea</li></LinkItem>
                        <LinkItem href="www.twitter.com"><li>rarity.tools</li></LinkItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}