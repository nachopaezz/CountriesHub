import axios from 'axios'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'


export function fetchCountry(){
   return function(dispatch){
      axios.get('http://localhost:3001/api/country')
      .then((country) => {
          dispatch({           //  Despachamos la acción
              type: FETCH_COUNTRY,
              payload: country.data // .data para la info
          })
      })
      .catch((error) => {
          console.log(error)
      })
   }
}


export function searchCountry(search){
    return function(dispatch){
       axios.get('http://localhost:3001/api/country?name=' + search)
       .then((country) => {
           dispatch({           //  Despachamos la acción
               type: SEARCH_COUNTRY,
               payload: country.data // .data para la info
           })
       })
       .catch((error) => {
           console.log(error)
       })
    }
 }