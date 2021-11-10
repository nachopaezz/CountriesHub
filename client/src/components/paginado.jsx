import React from "react";
import "./paginado.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <section className="paginacion">
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li href="number" key={number}>
              <button className="button" onClick={() => paginado(number)}> {number}</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
