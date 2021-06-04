import { useState, useEffect } from 'react'
import BlogsList from './BlogsList'

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:1},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Lucy", id:2},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:3}
    ])

    const [name, setName] = useState("mario")

    const handleDelete = (id) => {
        let newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    const changeName = (newName) => {
        setName(newName)
    }

    useEffect(() => {
        console.log("useEffect ran")
    }, [name])

    return (
        <div className="homepage">
            <BlogsList blogs = { blogs } title = "All Blogs" handleDelete = { handleDelete }/>
            <BlogsList blogs = { blogs.filter(blog => blog.author === "Martin") } title = "Martin's Blogs" handleDelete = { handleDelete }/>
            <button onClick = {() => changeName("puzo")}>change name</button>
            <p>{ name }</p>
        </div>
    )
}

export default Homepage
