import './App.css';
import Country from './store/components/country';
import SearchBar from './store/components/searchBar';
import Order from './store/components/order'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Order />
      <Country />
    </div>
  );
}

export default App;
