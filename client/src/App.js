import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./store/components/home";
import SearchBar from "./store/components/searchBar";
import Order from "./store/components/order";
import Details from "./store/components/details";
import AddActivity from "./store/components/addActivity";
import LandingPage from "./store/components/landingPage";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route path="/add">
          <AddActivity />
        </Route>
        <Route path="/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Order />
          <Home />
        </Route>
        <Route exact path="/landing">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
