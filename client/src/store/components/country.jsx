import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../actions/index";
import CountryDetail from "./countryDetail";

export default function Country() {
  let countries = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry())
  }, [dispatch])
  console.log(countries)
  return(
    <div>
      {countries.map((countryDetail) => {
        return <CountryDetail name={countryDetail.name} flag={countryDetail.flag} continent={countryDetail.continent} />
      })}
    </div>)
}
