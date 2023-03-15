import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from "./App.module.css";
import { useState } from "react";

function App () {

  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))  //Retorna un array nuevo donde el pj que poseia el id del parametro no esta, filtrandolo
  }
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2be446ab7c25.302da337f0c07b58dfab";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json())
    .then(data=> {
      /*En "if (data.name && !characters.find((char)=> char.id === data.id))" chequeamos que el personaje exista (si existe cualquiera de sus 
        propiedades, sera true) y que no se encuentre ya en el estado (renderizado), para asi evitar renderizar copias iguales de cartas */
      if (data.name && !characters.find((char)=> char.id === data.id)) {  
        setCharacters((oldChars)=> [...oldChars, data]); //setCharacters recibe una callback que toma el estado viejo y retorna el estado nuevo
      }
      else {
        window.alert("Algo salio mal");
      }
    })
  }
  return (
    <div className={style.app} style={{ padding: '25px' }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch}/>
      </div>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
