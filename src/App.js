import { useEffect, useState } from "react";
import "./App.css";
import Algorithm from "./components/Constants/Algorithm";
import { ElementsContext } from "./components/ElementsContext";
import Header from "./components/Header";

const App = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [algorithm, setAlgorithm] = useState();
  const [trace, setTrace] = useState([]);

  const colorKey = Algorithm[algorithm]?.colorKey;
  const description = Algorithm[algorithm]?.description;

  const createTrace = () => {
    const numbers = [...array];
    const sort = Algorithm[algorithm]?.algorithm;
    if (sort) {
      const trace = sort(numbers);
      setTrace(trace);
    }
  };

  const generateRandomArray = () => {
    const randomArray = Array(arraySize)
      .fill(0)
      .map(() => Math.floor(Math.random() * Math.floor(arraySize * 5)) + 1);
    setTrace([]);
    setArray(randomArray);
  };

  useEffect(() => {
    generateRandomArray();
  }, [arraySize, algorithm]);

  useEffect(() => {
    createTrace();
  }, [array]);

  return (
    <ElementsContext.Provider
      value={{ array, setArray, arraySize, setArraySize, algorithm, setAlgorithm, trace, setTrace }}
    >
      <div>
        <Header />
      </div>
    </ElementsContext.Provider>
  );
};

export default App;
