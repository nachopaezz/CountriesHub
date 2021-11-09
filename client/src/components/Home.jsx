import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity, fetchCountry } from "../store/action";
import Country from "./country";
import Paginado from "./paginado";
import SearchBar from "./searchBar";
import Order from "./order";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  let allCountries = useSelector((state) => state.filterCountries);
  let dispatch = useDispatch();
  let [currentPage, setCurrentPage] = useState(1); //guardo en un estados local la pag actual
  let [countriesPerPage] = useState(9); //guardo cuantos personajes quiero por pag
  let indexOfLastCountry = currentPage * countriesPerPage; // indice del ultimo personaje = a la pag actual en la que me encuetro * la cantidad de paises por pag
  let indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // indice del primer pais = al indice del ultio personaje - los personajes por pag
  let currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  let paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchCountry(), fetchActivity());
  }, [dispatch]);

  function handleOnclick(e) {
    e.preventDefault();
    dispatch(fetchCountry());
  }

  return (
    <div>
      <Link to="/add" className={style.rayita}>
        <button className={style.buttonCreate}>Create Activity</button>
      </Link>
      <Link to="/">
        <h1 className={style.h1}>Countries Hub</h1>
      </Link>
      <SearchBar />
      <Order />
      <input
        type="submit"
        value="All Countries"
        className={style.buttonAll}
        onClick={(e) => {
          handleOnclick(e);
        }}
      />

      {currentCountries?.map((country) => {
        return (
          <Country
            key={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}
            id={country.id}
          />
        );
      })}
      <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginado={paginado}
      />
    </div>
  );
}