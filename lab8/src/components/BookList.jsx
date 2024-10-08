import BookItem from "./BookItem";

function BookList({ books, onDeleteBook, onEditBook }) {
  if (books.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onDeleteBook={onDeleteBook}
            onEditBook={onEditBook}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;