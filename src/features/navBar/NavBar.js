import React from "react"
import styles from './NavBar.module.css'
import { NavIcon } from "../../assets/icons/icons"

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <h1 className={styles.title}>/R</h1>
            <div className={styles.navIcon}>
                <NavIcon />
            </div>
            <input className={styles.searchBar} placeholder="Search here!"></input>
        </div>
    )
}