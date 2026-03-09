# 📚 Book Price Comparator – Frontend

Interface web desenvolvida em **React + Vite** para pesquisar livros e visualizar informações obtidas de diferentes fontes através de uma API própria.

A aplicação permite que o usuário pesquise pelo nome de um livro e visualize:

* Título do livro
* Autor
* Capa
* Editora
* Informações retornadas por diferentes APIs
* Ofertas disponíveis para compra

---

# 🚀 Tecnologias utilizadas

* React
* Vite
* JavaScript
* Fetch API
* CSS

---

# 🔗 Integração com Backend

Este frontend consome a API desenvolvida no projeto:

**book-price-api**

Endpoint utilizado:

```
GET /books/search?q=nome-do-livro
```

Exemplo de requisição:

```
http://localhost:3000/books/search?q=harry%20potter
```

A API retorna um JSON com os livros encontrados e possíveis ofertas de preço.

---

# 📂 Estrutura do projeto

```
book-price-frontend
│
├── public
│
├── src
│   ├── components
│   │   ├── BookCard.jsx
│   │   ├── PriceList.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

---

# ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seuusuario/book-price-frontend.git
```

### 2️⃣ Acessar a pasta do projeto

```
cd book-price-frontend
```

### 3️⃣ Instalar as dependências

```
npm install
```

### 4️⃣ Executar o projeto

```
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

# 🔎 Como usar

1. Digite o nome de um livro no campo de busca.
2. Clique em **Pesquisar**.
3. A aplicação irá consultar a API backend.
4. Os livros encontrados serão exibidos na tela.

Caso existam ofertas disponíveis, elas também serão exibidas.

---

# 🧠 Funcionalidades

* Pesquisa de livros por nome
* Exibição de capa e dados do livro
* Integração com API externa
* Interface simples e responsiva
* Consumo de API REST

---

# 👩‍💻 Autor

**Giovana Tochtrop do Nascimento**
