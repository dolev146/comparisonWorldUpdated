
import Header from "./components/Header";
import Spacer from "./components/Spacer";
import CompareComp from "./components/compare/CompareComp";

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Spacer space={10} />
    <div className="Wrapper">
      <CompareComp />
      <CompareComp />
    </div>
  </div>
  );
}

export default App;
