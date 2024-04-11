import { useState } from "react";
import "./App.css";
import MyCard from "./components/QuestionCard";

function App() {
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  const decrementIndex = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      <h1>Name That Breed</h1>
      <MyCard index={index} />
      <button onClick={decrementIndex}>Previous</button>
      <button style={{ float: "right" }} onClick={incrementIndex}>
        Next
      </button>
    </div>
  );
}

export default App;
