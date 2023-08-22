import React from 'react'
import { useSelector } from 'react-redux'

export default function PostsContainer() {
    const { posts } = useSelector(state => state.posts)
  return (
    <div>{posts}</div>
  )
}
