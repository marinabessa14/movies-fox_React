import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    {/* Definindo o componente pai da aplicação {App} */}
      <Route element={<App />}>
        {/* Definindo as rotas do projeto */}
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} /> {/*pega o id do filme */}
        <Route path="search/" element={<Search />} />

      </Route>

    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
