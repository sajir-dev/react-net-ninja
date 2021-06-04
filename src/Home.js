import { useState, useEffect } from 'react'
import BlogsList from './BlogsList'

const Homepage = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(
                res => {
                    // console.log(res)
                    if (!res.ok) {
                        setIsError(true)
                        setIsLoading(false)
                        throw Error('could not catch data for the resource');
                    }
                    return res.json()
                })
            .then(
                data => {
                    setBlogs(data)
                    setIsLoading(false)
                    setIsError(false)
                }
            )
            .catch(
                err => {
                    console.log(err)
                    setIsError(true)
                    setIsLoading(false)
                }
            )
        }, 1000)
        }, [])


    return (
        <div className="homepage">
            { isLoading && <p>Loading...</p>}
            { isErr && <p>Could not fetch resources</p>}
            { blogs && <BlogsList blogs = { blogs } title = "All Blogs"/> }
        </div>
    )
}

export default Homepage
