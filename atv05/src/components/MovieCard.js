import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    return favs.some((m) => m.imdbID === movie.imdbID);
  });

  function toggleFavorite() {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favs = favs.filter((m) => m.imdbID !== movie.imdbID);
    } else {
      favs.push(movie);
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
  }

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 200, textAlign: "center" }}>
      <Link to={`/filme/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={movie.Poster} alt={movie.Title} width="150" />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
      <button onClick={toggleFavorite} style={{ marginTop: 10 }}>
        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}

export default MovieCard;
