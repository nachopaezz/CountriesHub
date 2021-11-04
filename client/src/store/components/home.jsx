import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../actions/index";
import Country from "./country";

export default function Home() {
  let countries = useSelector((state) => state.filteredCountries);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);
  return (
    <div>
      {countries.map((country) => {
        return (
          <Country
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
            capital={country.capital}
            subregion={country.subregion}
            area={country.area}
            population={country.population}
          />
        );
      })}
    </div>
  );
}
