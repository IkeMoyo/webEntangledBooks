import { useState } from "react";

const EditBook = ({book}) => {
    const [author, setAuthor] = useState(book.author)
    const [publicationDate, setPublicationDate] = useState(book.publicationDate)

    const onSubmit = () => {
        const updBook = {author, publicationDate}

        return updBook
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Author</label>
                <input type='text' placeholder='Edit Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Publication Date</label>
                <input type='date' placeholder='Edit Publication Date' value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
            </div>

            <input type='submit' value='Edit Book' className="btn btn-block" />
        </form>
      );
}
 
export default EditBook;