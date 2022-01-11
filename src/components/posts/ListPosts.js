import React, { useEffect, useState } from 'react'
import { PostCard } from './PostCard'
import './ListPosts.css'

const ListPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('posts/posts.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => data.json())
            .then(fetchedPosts => {
                setPosts(fetchedPosts)
            })
    }, [])

    return (
        <section className='limit-content posts'>
            {
                posts.length !== 0 ?
                    posts.map(post => <PostCard key={post.title} post={post} />)
                    :
                    <h2>Cargando posts...</h2>
            }
        </section>
    )
}

export default ListPosts
