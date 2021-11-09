import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../store/action";
import "./searchBar.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchCountry(search));
    setSearch("");
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search..." onChange={onInputChange} value={search} />
        <input type="submit" className="lupa" value="🔍" />
      </form>
    </div>
  );
}
