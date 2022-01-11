import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

export const PostCard = ({ post }) => {

    const { title, description, route } = post

    return (
        <article className='card'>
            <div className="card__description">
                <Link className='link' to={`/blog/${route}`}>{title}</Link>
                <p>{description}</p>
            </div>
        </article>
    )
}
