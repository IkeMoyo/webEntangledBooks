import { useState } from "react";



const AddBook = ({onAddBook}) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publicationDate, setPublicationDate] = useState("")

    const onSubmit = () => {
        
        const edit = false

        const book = {title, author, publicationDate, edit}

        return book
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Book</label>
                <input type='text' placeholder='Add Book Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Author</label>
                <input type='text' placeholder='Add Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Publication Date</label>
                <input type='date' placeholder='Add Publication Date' value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
            </div>

            <input type='submit' value='Add Book' className="btn btn-block" />
        </form>
      );
}
 
export default AddBook;