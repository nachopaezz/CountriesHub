import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Details({name, flag, continent}){

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
        <h3>{country.name}</h3>
        <h5>{country.continent}</h5>
        <img src={country.flag} alt="imagen"/>
             </> :
        <div>Estoy Cargando...</div>     // Sino... "está cargando U.U"
         }
         <Link to= '/'><button>Return</button></Link>
    </div>
}