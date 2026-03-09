import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome do livro"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default SearchBar;