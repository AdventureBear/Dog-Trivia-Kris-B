import { breedDataObj } from "../data/gameData";

function ButtonGroup() {
  const breedDataObj = {
    questionId: 1,
    imagePath: "../images/1_shih_tzu.jpg",
    correct: "Shih Tzu",
    incorrect1: "Maltese",
    incorrect2: "Great Dane",
    incorrect3: "Chihuahua",
  };

  return (
    <>
      <div>
        <button id="ansBtnA">{breedDataObj.correct}</button>
        <button id="ansBtnB">{breedDataObj.incorrect1}</button>
      </div>
      <div>
        <button id="ansBtnA">{breedDataObj.incorrect2}</button>
        <button id="ansBtnB">{breedDataObj.incorrect3}</button>
      </div>
    </>
  );
}

export default ButtonGroup;
