import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Details({name, flag, continent, capital, subregion, area, population}){

    const [country, setCountry ] = useState(null)
    let {id} = useParams()    // -----------> Devuelve un objeto de los parámetros para la ruta renderizada.
    useEffect(() => {
        axios.get('http://localhost:3001/api/country/' + id)
        .then((response) => {
           setCountry(response.data)
        })
        return() => {
            setCountry(null)     // CleanUp ---> Si trabajan con redux
        }

    }, [id])

    return <div>
         {
             country ?          // Si está el personaje ----- > Mostrame
             <>
        <h1>{country.name}</h1>
        <h2>{country.continent}</h2>
        <img src={country.flag} alt="imagen"/>
        <>
        <ul>Continent: {country.continent}</ul>
        <ul>Capital: {country.capital}</ul>
        <ul>Subregion: {country.subregion}</ul>
        <ul>Area: {country.area}</ul>
        <ul>Population: {country.population}</ul>
        </>
        </> :
        <div>Estoy Cargando...</div>     // Sino... "está cargando U.U"
         }
         <Link to='/'><button>Return</button></Link>
    </div>
}