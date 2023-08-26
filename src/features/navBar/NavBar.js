import React, { useState } from "react"
import styles from './NavBar.module.css'
import { NavIcon } from "../../assets/icons/icons"
import { useDispatch } from "react-redux"
import { getSearch } from "../posts/postsSlice"

export default function Navbar() {
    const [searchTermLocal, setSearchTermLocal] = useState('')

    const dispatch = useDispatch()

    function handleSearchTermChange(e) {
        setSearchTermLocal(e.target.value)
    }

    function handleSearchTermSubmit(e) {
        e.preventDefault();
        dispatch(getSearch(searchTermLocal))
    }

    return (
        <div className={styles.navBar}>
            <h1 className={styles.title}>/R</h1>
            <form className="search" onSubmit={handleSearchTermSubmit} >
                <input
                    type="text"
                    className={styles.searchBar}
                    placeholder="Search here!"
                    value={searchTermLocal}
                    onChange={handleSearchTermChange}
                />
                <button
                    className={styles.navIcon}
                    type="submit"
                    onClick={handleSearchTermSubmit}
                >
                    <NavIcon />
                </button>
            </form>
        </div>
    )
}