
const BlogsList = ({blogs, title}) =>
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
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsList