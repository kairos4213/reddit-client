import React from 'react'

export default function Post({post}) {
    const {title, author, ups} = post
    return (
        <article>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{ups}</p>
        </article>
    )
}
