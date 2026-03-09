import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import PriceList from "./components/PriceList";
import { searchBooks } from "./services/api";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(query) {
    try {
      setLoading(true);
      setError("");

      const data = await searchBooks(query);

      setBooks(data.books || []);
      setOffers(data.offers || []);
    } catch (err) {
      setError("Não foi possível buscar os dados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>📚 Book Price Comparator</h1>
      <p>Pesquise livros e compare preços entre diferentes fontes.</p>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <section>
        <h2>Livros encontrados</h2>
        <div className="grid">
          {books.map((book, index) => (
            <BookCard key={`${book.title}-${index}`} book={book} />
          ))}
        </div>
      </section>

      <section>
        <PriceList offers={offers} />
      </section>
    </div>
  );
}

export default App;
