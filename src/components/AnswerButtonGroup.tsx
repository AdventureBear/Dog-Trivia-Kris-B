import { breedDataObj } from "../data/gameData";
import "./AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";
import { useState } from "react";

interface Props {
  index: number;
}

function AnswerButtonGroup({ index }: Props) {
  // let selectedBreedName = "";
  // let activeButton = "";
  // let correctBreedName = "";
  // let isCorrect = true;

  // const [color, setColor] = useState("purple");

  // const handleClick = (evt: any) => {
  //   selectedBreedName = evt.target.innerText;
  //   activeButton = evt.target.id;
  //   correctBreedName = breedDataObj[index].breedName;

  //   console.log(evt);
  //   console.log("Id of Clicked Button: " + evt.target.id);

  //   console.log("Selected: " + selectedBreedName);
  //   console.log("Correct: " + correctBreedName);

  //   selectedBreedName === correctBreedName
  //     ? (isCorrect = true)
  //     : (isCorrect = false);

  //   console.log("Correct? " + isCorrect);

  //   setColor(isCorrect ? "green" : "red");
  // };

  return (
    <>
      <div className="btn-group" id="AnswerButtonGroup">
        <AnswerButton index={index} answerIndex={0} />
        <AnswerButton index={index} answerIndex={1} />
        <AnswerButton index={index} answerIndex={2} />
        <AnswerButton index={index} answerIndex={3} />
      </div>
    </>
  );
}

export default AnswerButtonGroup;
