// import "./Card.css";
import style from "./Card.module.css";

const Card = () => {
  console.log(style);
  //   const tituloStyle = {
  //     color: "red",
  //     fontSize: "2em",
  //   };
  return (
    <div className={style.container}>
      {/* <h1 style={tituloStyle}>Esto es una CARD</h1> */}
      <h1 className={style.titulo}>Esto es una CARD</h1>
      <div className={style.container}>
        <p>Este es otro container</p>
      </div>
    </div>
  );
};

export default Card;
