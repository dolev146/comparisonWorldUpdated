const SearchResult = ({ result, setChosen, setSearchTerm, setCharecters }) => {
    const setNewCharacter = (result) => {
      setChosen({ ...result });
      setSearchTerm("");
      setCharecters([]);
    };
  
    return (
      <>
        <span
          className="Result"
          onClick={() => {
            setNewCharacter(result);
          }}
        >
          <img src={result.image} alt={result.name} />
          <span>{result.name}</span>
        </span>
      </>
    );
  };
  
  export default SearchResult;
  