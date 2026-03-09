function BookCard({ book }) {
  return (
    <div className="card">
      {book.thumbnail && <img src={book.thumbnail} alt={book.title} />}
      <h3>{book.title}</h3>
      <p><strong>Autores:</strong> {book.authors?.join(", ") || "Não informado"}</p>
      <p><strong>Editora:</strong> {book.publisher || "Não informada"}</p>
      <p><strong>ISBN-13:</strong> {book.isbn13 || "Não informado"}</p>
      <p><strong>Fonte:</strong> {book.source}</p>
    </div>
  );
}

export default BookCard;