import "./App.css";
import MyCard from "./components/QuestionCard";

function App() {
  return (
    <div>
      <h1>Name That Breed</h1>
      <MyCard index={1} />
    </div>
  );
}

export default App;
