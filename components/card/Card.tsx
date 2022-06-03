import React from 'react'

import styles from './Card.module.scss'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

export function Card(props: Props) {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export function CardTitle(props: Props) {
    return (
        <div className={styles.cardTitle}>
            {props.children}
        </div>
    )
}

export function CardContent(props: Props) {
    return (
        <div className={styles.cardContent}>
            {props.children}
        </div>
    )
}