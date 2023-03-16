import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    /*EJEMPLO DE USO DE AXIOS Y DIFERENCIAS CON FETCH()*/
    useEffect(() => {
      const URL_BASE = "https://be-a-rym.up.railway.app/api";
      const KEY = "2be446ab7c25.302da337f0c07b58dfab";

      axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response)=>
        setCharacter(response.data)
      );
    }, []);

    return (
        <div className={style.contenedorDetail}>
            {
                character.name ? 
                (<>
                        <h2>{character.name}</h2>
                        <h4>Status: {character.status}</h4>
                        <h4>Species: {character.species}</h4>
                        <h4>Gender: {character.gender}</h4>
                        <h4>Origin: {character.origin?.name}</h4> {/*{character.origin?.name} hace que react renderice el componente con la prop "name" 
                        cuando esta ya haya llegado de la request*/}
                        <img src={character.image} alt="img"/>
                </>)
                : (<h1>Loading character...</h1>
            )}
        </div>
    )
}

export default Detail;