import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from "./Header.module.scss"

import { Menu } from './menu/Menu'

import { useSwipeable } from 'react-swipeable'

export function Header() {
    /* sidebar state and getter */
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)

    const listening = true

    /* to close on outlayer touch */
    const closeSidebarIfOpened = () => {
        if (sidebar && listening) {
            toggleSidebar()
        }
    }

    /* css dynamic classes for show/hide menu */
    const contentClassname = sidebar ?
        `${styles["nav-open"]} ${styles.menuContainer}`
        : styles.menuContainer;

    /* css dynamic classes for outside container*/
    const outsideClassname = sidebar ?
        `${styles.outsideContainer}`
        : `${styles["hide"]} ${styles.outsideContainer}`;

    /* css menu button d classes */
    const buttonClassname = sidebar ? 
        `${styles.navIcon} ${styles.open}`
        : styles.navIcon;
    
    /* swipe gestures handler with react-swipeable */
    const handlers = useSwipeable({
        trackMouse: true,
        onSwipedRight: () => {
            if (!sidebar) {
                toggleSidebar()
            }
        },
        onSwipedLeft: () => {
            if (sidebar) {
                toggleSidebar()
            }
        },
    });

    let route = useRouter().pathname
    console.log(route)

    const homeLinkClass = route == "/" ?
        `${styles.link} ${styles.active}`
        : `${styles.link}`
    
    const madrugaLinkClass = route == "/madruga" ?
        `${styles.link} ${styles.active}`
        : `${styles.link}`

    const roadmapLinkClass = route == "/roadmap" ?
        `${styles.link} ${styles.active}`
        : `${styles.link}`

    const mintLinkClass = route == "/mint" ?
        `${styles.link} ${styles.active}`
        : `${styles.link}`

    
    return (
        <div className="header">
            <div className={styles.pageContent} {...handlers} onClick={closeSidebarIfOpened}></div>
            <div className={`${styles.container} ${styles.mobileOnly}`}>
                <div className={styles.header}></div>
                <div className={contentClassname} onClick={toggleSidebar}><Menu></Menu></div>
                <div className={buttonClassname} onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <div className={outsideClassname} onClick={closeSidebarIfOpened}></div> */}

                <h2 className={`${styles.title} ${styles.mobileOnly}`}>HPUX</h2>
            </div>
            <div className={`${styles.container} ${styles.webOnly}`}>
                <h2 className={`${styles.title} ${styles.webOnly}`}>Homem Primata Underground</h2>
                <div className={styles.navLinks}>
                    <Link href="/"><a className={homeLinkClass}>SOBRE</a></Link>
                    <Link href="/madruga"><a className={madrugaLinkClass}>ARTISTA</a></Link>
                    <Link href="/roadmap"><a className={roadmapLinkClass}>ROADMAP</a></Link>
                    <Link href="/mint"><a className={mintLinkClass}>NFT</a></Link>
                </div>
            </div>
        </div>
    )
}