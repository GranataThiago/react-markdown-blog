import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ListPosts from '../components/posts/ListPosts';
import { Post } from '../components/posts/Post'
import { Header } from '../components/ui/Header';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <hr className='limit-content' />
                <Routes>
                    <Route path="/" element={<ListPosts />}></Route>
                    <Route path="blog/:postId" element={<Post />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter
