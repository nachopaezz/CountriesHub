import { FETCH_COUNTRY, SEARCH_COUNTRY } from "../actions";

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
      }
      case SEARCH_COUNTRY:
      return {
        ...state,
        countries: action.payload,
      }
    default:
        return state;
  }
}
