import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Martin')
    const [isPending, setisPending] = useState(false)
    const history = useHistory()
    
    const handleSubmit = e => {
        e.preventDefault()
        setisPending(true)

        const blog = { title, body, author }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setisPending(false)
            history.push("/")
        })
    }

    return ( 
        <div className="create">
            <h2>
                Add a new blog!
            </h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text"
                    required
                    value = { title }
                    onChange = {e => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                    required
                    value = { body }
                    onChange = { e => setBody(e.target.value) }
                />
                <label>Author</label>
                <select
                    value = { author }
                    onChange = { e => setAuthor(e.target.value) }
                >
                    <option value = "Martin">Martin</option>
                    <option value = "Puzo">Puzo</option>
                    <option value = "Lucy">Lucy</option>
                </select>
                { !isPending && <button type="submit">Create</button> }
                { isPending && <button>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;