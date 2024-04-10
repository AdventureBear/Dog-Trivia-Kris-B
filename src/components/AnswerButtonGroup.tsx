import { breedDataObj } from "../data/gameData";
import "./AnswerButtonGroup.css";
import { useState } from "react";

interface Props {
  index: number;
}

function AnswerButtonGroup({ index }: Props) {
  let selectedBreedName = "";
  let activeButton = "";
  let correctBreedName = "";
  let isCorrect = true;

  const [color, setColor] = useState("purple");

  const handleClick = (evt: any) => {
    selectedBreedName = evt.target.innerText;
    activeButton = evt.target.id;
    correctBreedName = breedDataObj[index].breedName;

    console.log(evt);
    console.log("Id of Clicked Button: " + evt.target.id);

    console.log("Selected: " + selectedBreedName);
    console.log("Correct: " + correctBreedName);

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    console.log("Correct? " + isCorrect);

    setColor(isCorrect ? "green" : "red");
  };

  return (
    <>
      <div className="btn-group" id="AnswerButtonGroup">
        <button
          style={{ backgroundColor: color, color: "white" }}
          id="ansBtnA"
          onClick={handleClick}
        >
          {breedDataObj[index].a}
        </button>
        <button
          style={{ backgroundColor: color, color: "white" }}
          id="ansBtnB"
          onClick={handleClick}
        >
          {breedDataObj[index].b}
        </button>
        <button
          style={{ backgroundColor: color, color: "white" }}
          id="ansBtnC"
          onClick={handleClick}
        >
          {breedDataObj[index].c}
        </button>
        <button
          style={{ backgroundColor: color, color: "white" }}
          id="ansBtnD"
          onClick={handleClick}
        >
          {breedDataObj[index].d}
        </button>
      </div>
    </>
  );
}

export default AnswerButtonGroup;
