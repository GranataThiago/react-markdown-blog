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

    }, [postId])

    return (
        <section className='post limit-content'>
            {
                !post
                    ?
                    <h2 className='center'>Cargando...</h2>
                    :
                    <Markdown>
                        {post}
                    </Markdown>
            }

        </section>
    )
}
