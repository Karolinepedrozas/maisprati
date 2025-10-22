import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    getMovieDetails(id)
      .then((data) => {
        if (data.Response === "False") {
          setError(data.Error || "Filme não encontrado.");
          setMovie(null);
        } else {
          setMovie(data);
        }
      })
      .catch(() => {
        setError("Erro ao buscar detalhes do filme.");
        setMovie(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  if (error) return <div>
    <Link to="/">← Voltar</Link>
    <p style={{color: "red"}}>{error}</p>
  </div>;

  if (!movie) return null;

  return (
    <div>
      <Link to="/">← Voltar</Link>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><b>Ano:</b> {movie.Year}</p>
      <p><b>Diretor:</b> {movie.Director}</p>
      <p><b>Elenco:</b> {movie.Actors}</p>
      <p><b>Sinopse:</b> {movie.Plot}</p>
      <p><b>Avaliação:</b> {movie.imdbRating}</p>
    </div>
  );
}

export default Details;
