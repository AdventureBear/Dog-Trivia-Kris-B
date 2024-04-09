// import BreedInfo from "./components/BreedInfo";
import MyCard from "./components/MyCard";
import { breedDataObj } from "./data/gameData.js";

function App() {
  return (
    <div>
      <MyCard index={0} />
      {/* <BreedInfo breedNames={breedNames} />*/}

      {breedDataObj.map((breedData) => (
        <div key={breedData.questionId}>
          <img src={breedData.imagePath} />
        </div>
      ))}

      {/* {breedDataObj.map((breedData, i = 1) => (
        <div key={breedData.questionId}>
          {breedData.questionId === i && <img src={breedData.imagePath} />}
        </div>
      ))} */}
    </div>
  );
}

export default App;
