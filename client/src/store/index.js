import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk"; // Para realizar acciones con promesas.

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
