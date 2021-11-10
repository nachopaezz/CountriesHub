import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./AddActivities.module.css";
import { Link } from "react-router-dom";
import { getActivity, postActivity } from "../store/action";
import { useHistory } from "react-router";


//validar formulario
function validate(country) {
  let error = {};
  if (!country.countryId) {
    error.countryId = "Select Country";
  } else if (!country.name) {
    error.name = " Select Activity";
  } else if (!country.duration) {
    error.duration = "Select Duration";
  } else if (!country.season) {
    error.season = "Select Season";
  } else if (!country.physicalDifficulty) {
    error.season = "Select Physical Difficulty";
  } else if (!country.technicalDifficulty) {
    error.season = "Select Technical Difficulty";
  }
  return error;
}

export default function AddActivities() {
  let dispatch = useDispatch();
  let history = useHistory();
  let allCountries = useSelector((state) => state.filterCountries);
  const [error, setError] = useState({});

  const [country, setCountry] = useState({
    countryId: [],
    name: "",
    physicalDifficulty: "",
    technicalDifficulty: "",
    duration: "",
    season: "",
  });

  function onInputChange(e) {
    e.preventDefault();
    setCountry({
      ...country,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...country,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setCountry({
      ...country,
      countryId: [...country.countryId, e.target.value],
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(country));
    alert("Created!");
    setCountry({
      countryId: "",
      name: "",
      physicalDifficulty: "",
      technicalDifficulty: "",
      duration: "",
      season: "",
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);


  // Retornamos div para completar la actividad + info
  return (
    <div className={style.div}>
      <h1 className={style.h1}>Create Activity</h1>
      <form onSubmit={onSubmit}>
        <div>
          <h3 className={style.h3}>Country:</h3>
          <select
            className={style.select}
            name="countryId"
            onChange={handleSelect}
            value={country.countryId}
          >
            <option selected="true" disabled="">Select Country</option>
            {allCountries?.map((country, i) => {
              return (
                <option value={country.id} key={i}>
                  {country.name}
                </option>
              );
            })}
            {error.countryId && <p>{error.countryId} </p>}
          </select>
          <h4>{country.countryId.map((el) => el + " + ")}</h4>
        </div>

        <div>
          <h3 className={style.h3}>Activity:</h3>
          <select
            className={style.select}
            name="name"
            onChange={onInputChange}
            value={country.name}
          >
          <option selected="true" disabled="">Select Activity</option>
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
            {error.name && <option>{error.name} </option>}
          </select>
        </div>

        <div>
          <h3 className={style.h3}>Duration:</h3>
          <select
            className={style.select}
            onChange={onInputChange}
            name="duration"
            type="text"
            value={country.duration}
          >
          <option selected="true" disabled="">Select Duration</option>
            <option value="30">30 min</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
            <option value="5">more than 5 hours</option>
            {error.duration && <option>{error.duration} </option>}
          </select>
        </div>

        <div>
          <h3 className={style.h3}>Physical Difficulty:</h3>
          <select
            className={style.select}
            name="physicalDifficulty"
            onChange={onInputChange}
            value={country.physicalDifficulty}
          >
          <option selected="true" disabled="">Select Difficulty</option>
            <option value="1">1-Beginner</option>
            <option value="2">2-Low</option>
            <option value="3">3-Medium</option>
            <option value="4">4-High</option>
            <option value="5">5-Professional</option>
            {error.physicalDifficulty && (
              <option>{error.physicalDifficulty} </option>
            )}
          </select>
        </div>

        <div>
          <h3 className={style.h3}>Technical Difficulty:</h3>
          <select
            className={style.select}
            name="technicalDifficulty"
            onChange={onInputChange}
            value={country.technicalDifficulty}
          >
          <option selected="true" disabled="">Select Difficulty</option>
            <option value="1">1-Beginner</option>
            <option value="2">2-Low</option>
            <option value="3">3-Medium</option>
            <option value="4">4-High</option>
            <option value="5">5-Professional</option>
            {error.technicalDifficulty && (
              <option>{error.technicalDifficulty} </option>
            )}
          </select>
        </div>

        <div>
          <h3 className={style.h3}>Season:</h3>
          <select className={style.select} name="season" onChange={onInputChange} value={country.season}>
          <option selected="true" disabled="">Select Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            {error.season && <option>{error.season} </option>}
          </select>
        </div>
        <input
          className={style.button}
          type="submit"
          value="Create"
          onClick={onSubmit}
          onChange={onInputChange}
          disabled={
            !country.name ||
            !country.countryId ||
            !country.technicalDifficulty ||
            !country.physicalDifficulty ||
            !country.season ||
            !country.duration
          }
        />
      </form>
      <Link className={style.link} to="/home">
        <button className={style.button}>Return</button>
      </Link>
    </div>
  );
}
