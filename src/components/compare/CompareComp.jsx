import { useState } from "react";
import Character from "./Character";
import SearchBar from "./SearchBar";

const CompareComp = () => {
  const [Chosen, setChosen] = useState({
    name: "",
    image: "../../placeholder.png",
    status: "Not Specified"
  });

  return (
    <div className="CompareComp">
      <Character Chosen={Chosen} setChosen={setChosen} />
      <SearchBar setChosen={setChosen} />
    </div>
  );
};

export default CompareComp;
