import axios from 'axios'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'


export function fetchCountry(){
   return function(dispatch){
      axios.get('http://localhost:3001/api/country')
      .then((country) => {
          dispatch({           //  Despachamos la acción
              type: FETCH_COUNTRY,
              payload: country
          })
      })
   }
}
