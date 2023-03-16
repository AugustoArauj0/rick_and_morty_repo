import React from "react";
import style from "./About.module.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className={style.contenedorAbout}>
            <br/>
            <h1>Bienvenido!</h1>
            <hr/>
            <p>Soy Augusto, y esta es mi pagina de Rick and Morty la cual hemos ido desarrollando a lo largo del bootcamp junto a nuestro 
            instructor Jorge Vega. Espero que les guste 🤙.</p>
          </div>
        )
    }
}

export default About;