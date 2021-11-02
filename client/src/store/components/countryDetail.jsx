export default function CountryDetail({name, flag, continent}){
    return <div>
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img src={flag} alt="imagen"/>
    </div>
}