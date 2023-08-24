import React from 'react'
import styles from './PostContainer.module.css'
import { useSelector } from 'react-redux'

import Post from '../post/Post'

export default function PostContainer() {
  const { posts } = useSelector(state => state.posts);

  return (
    <section className={styles.postContainer}>
      <h2>Post Container</h2>
      {posts.map(post => {
        return <Post key={post.data.id} post={post.data} />
      })}
    </section>
  )
}
