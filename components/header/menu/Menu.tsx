import React from "react"
import styles from "./Menu.module.scss"

import { MenuItem } from "../menuItem/MenuItem"

export function Menu() {
    return (
        <div className={styles.content}>
            <div className={styles.titleContent}>
                <h2>HPUX</h2>
            </div>
            <div className={styles.menuNav}>
                <MenuItem href="/"><h2>Sobre o projeto</h2></MenuItem>
                <MenuItem href="/madruga"><h2>Madruga Blues</h2></MenuItem>
                <MenuItem href="/roadmap"><h2>Roadmap</h2></MenuItem>
                <MenuItem href="/mint"><h2>EMITIR NFT</h2></MenuItem>
            </div>
        </div>
    )
}