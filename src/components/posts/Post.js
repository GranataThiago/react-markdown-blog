import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Post.css'

export const Post = () => {

    const { postId } = useParams();
    const [post, setPost] = useState(``);

    useEffect(() => {

        import(`../../posts/${postId}.md`)
            .then(data => {
                fetch(data.default)
                    .then(data => data.text())
                    .then(mdPost => {
                        setPost(mdPost)
                    })
            })

    }, [])

    return (
        <section className='post limit-content'>
            <Markdown>
                {post}
            </Markdown>
        </section>
    )
}
