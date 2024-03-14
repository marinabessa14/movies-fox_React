import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";


import './MovieGrid.css';


{/*Essas duas const traz a chave da API e a URL da API*/}

{/*importando a variavel que esta no .env utilizando o vite*/}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    {/*montando a url que precisa para acessar os filmes melhores avaliados*/}

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

   {/*fazendo um loop e imprimir os filmes, vou fazer em componentes*/}
   
   return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;