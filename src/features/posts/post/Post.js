import React from 'react'
import styles from './Post.module.css'
import { UpArrow, DownArrow } from '../../../assets/icons/icons'

export default function Post({ post }) {
    const { title, author, ups, permalink, preview, url} = post
    // console.log(preview) -- working on adding images

    return (
        <article className={styles.post}>
            <h3><a href={`https://reddit.com${permalink}`}>{title}</a></h3>
            <h4>{author}</h4>
            <span className={styles.votes}>
                <button className={styles.btn}>
                    <UpArrow />
                </button>
                <p>{ups}</p>
                <button className={styles.btn}>
                    <DownArrow />
                </button>
            </span>
            <img src={url} alt={title} />
        </article>
    )
}
