import React, { useState, useEffect } from "react"
import styles from './NavBar.module.css'
import { NavIcon } from "../../assets/icons/icons"
import { useSelector, useDispatch } from "react-redux"
import { getSearch, setSearchTerm } from "../posts/postsSlice"

export default function Navbar() {
    const [searchTermLocal, setSearchTermLocal] = useState('')
    const { searchTerm } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    function handleSearchTermChange(e) {
        setSearchTermLocal(e.target.value)
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm])

    function handleSearchTermSubmit(e) {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal))
        dispatch(getSearch(searchTerm))
    }

    return (
        <div className={styles.navBar}>
            <h1 className={styles.title}>/R</h1>
            <form className="search" onSubmit={handleSearchTermChange} >
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