import BlogsList from './BlogsList'
import useFetch from './useFetch'

const Homepage = () => {

    const endpoint = "http://localhost:8000/blogs"

    const { data:blogs, isLoading, isErr } = useFetch(endpoint)

    return (
        <div className="homepage">
            { isLoading && <p>Loading...</p>}
            { isErr && <p>Could not fetch resources</p>}
            { blogs && <BlogsList blogs = { blogs } title = "All Blogs"/> }
        </div>
    )
}

export default Homepage
