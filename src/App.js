import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from "../src/components/Nav/Nav.module.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';

function App () {

  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))  //Retorna un array nuevo donde el pj que poseia el id del parametro no esta, filtrandolo
  }
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2be446ab7c25.302da337f0c07b58dfab";

    /*En "if (characters.find((char)=> char.id === data.id))" chequeamos que el personaje no se encuentre ya en el estado (renderizado), para asi
    evitar renderizar copias iguales de cartas. Esta validacion la hacemos antes de la request, para no tener que hacer fetch() en vano si no 
    existe el id ingresado en el buscador. */
    if (characters.find((char)=> char.id === id)) {
      return alert("Personaje repetido");
    };

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json())
    .then(data=> {
      /*En "if (data.name)" chequeamos si el personaje existe al realizar la request, dado que si una de sus propiedades es true significa que 
      existe*/
      if (data.name) {  
        setCharacters((oldChars)=> [...oldChars, data]); //setCharacters recibe una callback que toma el estado viejo y retorna el estado nuevo
      }
      else {
        window.alert("Algo salio mal");
      }
    })
  }

  // ! RENDER
  return (
      <div className={style.nav}>
        <Nav onSearch={onSearch}/>
        
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:detailId" element={<Detail/>}/>
        </Routes>

      </div> 
  )
}

export default App
