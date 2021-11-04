import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"

export default function AddActivity(){

    const [activity, setActivity] = useState({})
    let history = useHistory()

    function onInputChange(e){
        e.preventDefault()
        setActivity({
            ...activity,
            [e.target.name] : e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/api/activity/', activity)
        .then(() =>{
            history.push("/")
        })
    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="">Nombre:</label>
        <input onChange={onInputChange} name="name" type="text" value={activity.name}></input>
        <label htmlFor="">Imagen:</label>
        <input onChange={onInputChange} name="image" type="text" value={activity.image}>Imagen:</input>
        <input type="submit"></input>
    </form>
}