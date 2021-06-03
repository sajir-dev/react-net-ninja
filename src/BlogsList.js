
const BlogsList = ({blogs, title, handleDelete}) =>
{
    // let blogs = props.blogs
    return(
        <div className="bloglist">
            <h2> { title } </h2>
            {   
                blogs.map(blog => (
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <button onClick = {() => handleDelete(blog.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsList