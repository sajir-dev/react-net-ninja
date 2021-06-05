import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();

    const endpoint = `http://localhost:8000/blogs/` + id

    const { data: blog, isLoading, isErr } = useFetch(endpoint)

    return ( 
        <div className="blog-details">
            {isLoading && <p>Loading...</p>}
            {isErr && <p>Error fetching blog</p>}
            {blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <p> { blog.author } </p>
                    <div> { blog.body } </div>
                </article>
            )}
        </div> 
    );
}
 
export default BlogDetails;