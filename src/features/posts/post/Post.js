import React from 'react'
import styles from './Post.module.css'
import { UpArrow, DownArrow } from '../../../assets/icons/icons'

export default function Post({ post }) {
    const { title, author, ups, permalink, subreddit_name_prefixed} = post

    return (
        <article className={styles.post}>
            <h3><a href={`https://reddit.com${permalink}`}>{title}</a></h3>
            <h4><a href={`https://reddit.com/${subreddit_name_prefixed}`}>{subreddit_name_prefixed}</a></h4>
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
        </article>
    )
}
