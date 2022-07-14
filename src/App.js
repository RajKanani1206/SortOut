import { useState } from "react";
import "./App.css";
import { ElementsContext } from "./components/ElementsContext";
import Header from "./components/Header";

const App = () => {
  const [arraySize, setArraySize] = useState(10);
  const [algorithm, setAlgorithm] = useState(null);

  return (
    <ElementsContext.Provider value={{ arraySize, setArraySize, algorithm, setAlgorithm }}>
      <div>
        <Header />
      </div>
    </ElementsContext.Provider>
  );
};

export default App;
