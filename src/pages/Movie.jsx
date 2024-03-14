import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";
import './Movie.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  {/*pegando o id que está na url*/}

  const {id} = useParams()

  {/*carregar o movie pela api*/}

  const [movie, setMovie] = useState(null);

 {/* função para carregar o filme */}

 const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
 }

  {/* função para formatar o orçamento/receita para moeda em dólar*/}

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

   useEffect(() => {

    {/* montando a URL que chama o filme individualmente */}

    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
   },);


  return (
    <div className="movie-page">
      {movie && (
        <>
        {/* trazendo os dados do filme que estão presentes no card */}
        <MovieCard movie={movie} showLink={false}></MovieCard>
        <p className="tagLine">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2/> Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>

        <div className="info">
          <h3>
            <BsGraphUp/> Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>

        <div className="info">
          <h3>
            <BsHourglassSplit/> Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>
  
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill/> Sinopse:
          </h3>
          <p>{movie.overview}</p>
        </div>

        
        </>
      )}

    </div>
  )
}

export default Movie