import React, { useState } from 'react';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchMovies(q, page = 1) {
    setLoading(true);
    setError('');
    try {
      const data = await searchMovies(q, page);
      if (data.Response === "False") {
        setError(data.Error || "Nenhum resultado encontrado.");
        setResults([]);
        setTotalPages(1);
      } else {
        setResults(data.Search || []);
        setTotalPages(data.totalResults ? Math.ceil(data.totalResults / 10) : 1);
      }
    } catch (err) {
      setError("Erro ao buscar os filmes. Tente novamente.");
      setResults([]);
      setTotalPages(1);
    }
    setLoading(false);
  }

  async function handleSearch(e) {
    e.preventDefault();
    setCurrentPage(1);
    if (query.trim()) {
      fetchMovies(query, 1);
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    fetchMovies(query, page);
  }

  return (
    <div>
      <h1>Buscar Filmes 🎬</h1>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Buscar</button>
      </form>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {loading && <p>Carregando...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      <div className="results" style={{ display: "flex", flexWrap: "wrap" }}>
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
