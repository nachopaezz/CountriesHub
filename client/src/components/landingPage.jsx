import React from 'react';
import { Link } from 'react-router-dom';
import style from './landPage.css';


export default function LandingPage(){
    return(
        <div>
            <h1 className="landing">Countries Hub</h1>
            <Link to = '/Home'>
            <input className="boton" type = 'submit' value = '▶' />
            </Link>
        </div>
    )
}