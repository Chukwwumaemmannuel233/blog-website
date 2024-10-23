import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('mario')
    const [isPending,setIsPending] = useState(false)
    const navigate =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)

        fetch('http://localhost:9001/blogs', {
            method:'POST',
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('blog added')
           setTimeout(() => {
            setIsPending(false)
            navigate('/') 
           }, 1000);
          
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
                 <label>Blog body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required 
                />
                 <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Me</button>}
                {isPending && <button disabled>Adding blog...</button>}
               
            </form>
        </div>
     );
}
 
export default Create;