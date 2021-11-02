import { FETCH_COUNTRY, SEARCH_COUNTRY, SORT } from "../actions";
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort";

const initialState = {
  countries: [],
  filteredCountries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case SORT:
      let orderedCoutries = [...state.countries];  // Hacemos una copia, para guardar la posición en memoria

       orderedCoutries = orderedCoutries.sort((a, b) => {  // Ordenamos
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
      ...state,
      filteredCountries: orderedCoutries
      };
    default:
      return state;
  }
}
