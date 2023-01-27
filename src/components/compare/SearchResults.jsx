import SearchResult from "./SearchResult";

const Tasks = ({
  results,
  onDelete,
  onToggle,
  setChosen,
  setSearchTerm,
  setCharecters
}) => {
  return (
    <>
      {results.map((result) => (
        <SearchResult
          key={result.id}
          result={result}
          onDelete={onDelete}
          onToggle={onToggle}
          setChosen={setChosen}
          setSearchTerm={setSearchTerm}
          setCharecters={setCharecters}
        />
      ))}
    </>
  );
};

// const searchResults = {
//   height: "100px",
//   width: "200px",
//   overflowY: "scroll",
//   overFlowX: "hidden"
// };

export default Tasks;
