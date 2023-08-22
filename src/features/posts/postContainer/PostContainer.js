import React from 'react'
import { useSelector } from 'react-redux'

import Post from '../post/Post'

export default function PostContainer() {
  const { posts } = useSelector(state => state.posts);

  return (
    <section>
      <h2>Post Container</h2>
      {posts.map(post => {
        return <Post key={post.id} {...post} />
      })}
    </section>
  )
}
