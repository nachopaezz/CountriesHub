import { useDispatch } from "react-redux";
import { ASCENDING, DESCENDING, HIGHEST, LOWER } from "../const/sort";
import {filterCountryByActivity,filterCountryByCountinent,filterCountryByPopulation,sort} from "../store/action";
import "./order.css";

// Componente Order
export default function Order() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }

  function handleFilterCountinent(e) {
    dispatch(filterCountryByCountinent(e.target.value));
  }

  function handleFilterActivity(e) {
    dispatch(filterCountryByActivity(e.target.value));
  }

  function handleFilterPopulation(e) {
    dispatch(filterCountryByPopulation(e.target.value));
  }

  return (
    <div>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCENDING}> A-Z </option>
        <option value={DESCENDING}> Z-A </option>
      </select>
      <select name="select" onChange={handleFilterPopulation}>
        <option value={HIGHEST}> HIGHEST </option>
        <option value={LOWER}> LOWER </option>
      </select>
      <select name="Select Continent" onChange={handleFilterCountinent}>
      <option selected="true" disabled="disabled">Select Continent</option>
        <option value="Asia">Asia</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antartida</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
      </select>
      <select name="select" onChange={handleFilterActivity}>
      <option selected="true" disabled="disabled">Select Activity</option>
        <option value="Eco Tourism">Eco Tourism</option>
        <option value="Festivals">Festivals</option>
        <option value="Golf">Golf</option>
        <option value="Africa">Bird watching</option>
        <option value="Bird watching">Mountain Bike</option>
        <option value="Museum">Museum</option>
        <option value="Rivers">Rivers</option>
        <option value="Sky">Sky</option>
        <option value="Nightclubs">Nightclubs</option>
        <option value="Fishing">Fishing</option>
        <option value="Pubs">Pubs</option>
        <option value="Tours">Tours</option>
        <option value="Diving">Diving</option>
        <option value="Marathons">Marathons</option>
        <option value="Triathlon">Triathlon</option>
        <option value="Gastronomic Tour">Gastronomic Tour</option>
        <option value="National Parks">National Parks</option>
        <option value="Thermal Centers">Thermal Centers</option>
        <option value="Adventure Turism">Adventure Turism</option>
      </select>
    </div>
  );
}
