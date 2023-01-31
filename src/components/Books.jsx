import Book from "./Book";

const Books = ({books}) => {
    return (
        <>
            {books.map(book => <Book key={book.title} book={book}/>)}
        </>
      );
}
 
export default Books;