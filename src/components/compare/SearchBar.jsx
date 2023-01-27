import { useState } from "react";
import SearchResults from "./SearchResults";
import SearchIcon from "../../search.svg";

const API_URL = "https://rickandmortyapi.com/api/character/?name=";

const SearchBar = ({ setChosen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharecters] = useState([]);

  const searchCharecters = async (search) => {
    if (search === "") {
      setCharecters([]);
      return;
    }
    const response = await fetch(`${API_URL}${search}`);
    const data = await response.json();
    console.log(data);
    setCharecters(data.results);
  };

  return (
    <div className="SearchAndResults">
      <div className="inputAndSearchIcon">
        <input
          className="SearchInput"
          placeholder="Search Character"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchCharecters(e.target.value);
          }}
          type="text"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchCharecters(searchTerm);
          }}
        />
      </div>
      <div
        className={`SearchResultsContainter ${
          characters?.length > 0 ? "ShowScroll" : ""
        }`}
      >
        {characters?.length > 0 ? (
          <SearchResults
            results={characters}
            setChosen={setChosen}
            setSearchTerm={setSearchTerm}
            setCharecters={setCharecters}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
