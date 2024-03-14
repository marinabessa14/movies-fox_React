import {useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

import './Navbar.css';

const Navbar = () => {
  {/* Controlando o state do search*/}

  const [search, setSearch] = useState("")

  {/* redirencionando o usuario na página de buscar quando clicar em enviar */}
  const navigate = useNavigate();

  {/*mapeando um evento para o submit do input*/}

  const handleSubmit = (e) => {
    e.preventDefault();
    

      {/*fazendo o redirecionamento para a página de search*/}

      if(!search) return

      {/* se tiver algo no search, ativa o navigate e redireciona para a /search, e o "q=" é para enviar na query string para pegar o valor e consultando a api para trazer o resultado da busca */}
      
      navigate(`/search?q=${search}`)
      setSearch("");


  }

 

  return (
    <nav id="navbar">
    <h2>
      <Link to="/">
        <BiCameraMovie/> MoviesFox</Link>
    </h2>
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Digite um filme" onChange={(e) => setSearch(e.target.value)} value={search} /> {/*Cada vez que digitar no input, muda o estado do search,baseado nos eventos*/} {/* value={search é para limpar o campo}*/}
    <button type="submit">
        <BiSearchAlt2/>
    </button>

   </form>
   
  </nav>
  )
}

export default Navbar