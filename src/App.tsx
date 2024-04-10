import "./App.css";
import MyCard from "./components/QuestionCard";

function App() {
  return (
    <div>
      <h1>Name That Breed</h1>
      <MyCard index={0} />
    </div>
  );
}

export default App;
