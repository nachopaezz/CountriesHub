import { Link } from "react-router-dom";

export default function CountryDetail({ id, name, flag, continent }) {
  // console.log(id)
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img src={flag} alt="imagen" />
      </Link>
    </div>
  );
}
