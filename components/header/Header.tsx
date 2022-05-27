import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import styles from "./Header.module.scss"

import { Menu } from '../menu/Menu'

export function Header() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const contentClassname = sidebar ?
        `${styles["nav-open"]} ${styles.menuContainer}`
        : styles.menuContainer;

    const buttonClassname = sidebar ? 
    `${styles.navIcon} ${styles.open}`
    : styles.navIcon;
    
    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={contentClassname}><Menu></Menu></div>
            <div className={buttonClassname} onClick={showSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div className={styles.webOnly}>
                <h2 className={styles.title}>Homem Primata Underground</h2>
            </div>
            <div className={styles.mobileOnly}>
                <h2 className={styles.title}>HPUX</h2>
            </div>
        </div>
    )
}