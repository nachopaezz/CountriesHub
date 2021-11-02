export default function CountryDetail({name, flag, continent}){
    return <div>
        <img src={flag} alt="imagen"/>
        <h3>{name}</h3>
        <h4>{continent}</h4>
    </div>
}