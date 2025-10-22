import React from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <Link to="/">← Voltar</Link>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum filme favoritado.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favorites.map((movie) => (
          <div key={movie.imdbID} style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 200 }}>
            <Link to={`/filme/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} width="150" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
