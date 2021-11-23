import { Link } from "react-router-dom";
import style from "./country.module.css";

// Detalle de la card por Paíssss
export default function Country({ id, name, flag, continent }) {
  return (
    <div className={style.card}>
      <Link to={`/id/${id}`} className={style.back}>
        <h1 className={style.h1}><b>{name}</b></h1>
        <h3 className={style.h3}>🌎 {continent}</h3>
        <img src={flag} alt="flag" className={style.img} />
      </Link>
    </div>
  );
}
