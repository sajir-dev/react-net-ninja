import { useState } from 'react'
import BlogsList from './BlogsList'

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:1},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Lucy", id:2},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:3}
    ])
    return (
        <div className="homepage">
            <BlogsList blogs = { blogs } title = "All Blogs"/>
            <BlogsList blogs = { blogs.filter(blog => blog.author == "Martin") } title = "Martin's Blogs" />
        </div>
    )
}

export default Homepage
