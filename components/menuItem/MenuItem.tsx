import Link from "next/link"
import React from "react"
import styles from "./MenuItem.module.scss"

type Props = {
    href: string,
    children?: JSX.Element,
}

export const MenuItem: React.FC<Props> = ({
    href,
    children,
}) => (
    <Link href={href}>
        <a className={styles.menuItem}>
            <div>
                {children}
            </div>
        </a>
    </Link>
)