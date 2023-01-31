import EditBook from "./EditBook";

const Book = ({book}) => {

    return (
        <div className="book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publicationDate}</p>

            {book.edit && <EditBook book={book}/>}
            
        </div>
      );
}
 
export default Book;