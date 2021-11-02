import './App.css';
import Country from './store/components/country';
import SearchBar from './store/components/searchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Country />
    </div>
  );
}

export default App;
