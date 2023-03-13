// import "./Cards.css";

import styled from "styled-components";

export const Titulo = styled.h1`
  color: yellow;
  font-size: 3em;
`;

export const Contenedor = styled.div`
  border: 1px solid black;
  background-color: blue;
`;

const Cards = () => {
  return (
    <Contenedor>
      {/* <h1 style={tituloStyle}>Estas son las CARDS</h1> */}
      <Titulo>Estas son las CARDS</Titulo>
      <p>Texto 1</p>
    </Contenedor>
  );
};

export default Cards;
