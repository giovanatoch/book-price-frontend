const API_BASE_URL = "http://localhost:3000";

export async function searchBooks(query) {
  const response = await fetch(
    `${API_BASE_URL}/books/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar livros.");
  }

  return response.json();
}