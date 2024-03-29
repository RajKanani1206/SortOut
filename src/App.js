import { useEffect, useState } from "react";
import "./App.css";
import Algorithm from "./components/Constants/Algorithm";
import { ElementsContext } from "./components/ElementsContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SortVisualizer from "./components/SortVisualizer";

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
    // eslint-disable-next-line
  }, [arraySize, algorithm]);

  useEffect(() => {
    createTrace();
    // eslint-disable-next-line
  }, [array]);

  return (
    <ElementsContext.Provider
      value={{ array, setArray, arraySize, setArraySize, algorithm, setAlgorithm, trace, setTrace }}
    >
      <div className="app">
        <Header randomizeArray={() => generateRandomArray()} />
        <main className="app-body">
          <SortVisualizer array={array} trace={trace} colorKey={colorKey} description={description} />
        </main>
        <Footer />
      </div>
    </ElementsContext.Provider>
  );
};

export default App;
