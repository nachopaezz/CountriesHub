import { Switch, Route } from "react-router";
import "./App.css";
import Country from "./store/components/country";
import SearchBar from "./store/components/searchBar";
import Order from "./store/components/order";
import Details from "./store/components/details";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route path="/:id">
          <Details />
        </Route>
        <Route path="/">
          <Order />
          <Country />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
