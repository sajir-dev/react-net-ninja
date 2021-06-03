import { useState } from 'react'

const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:1},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:2},
        {title:"Home brewery", body:"Story of a few drunkards", author:"Martin", id:3}
    ])
    return (
        <div className="homepage">
            {
                blogs.map(blog => (
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Homepage
