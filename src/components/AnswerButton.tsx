import { breedDataObj } from "../data/gameData";
import { useState } from "react";

interface Props {
  index: number;
  answerIndex: number;
}

function AnswerButton({ index, answerIndex }: Props) {
  let selectedBreedName = "";
  let correctBreedName = "";
  let isCorrect = true;

  let answers = [
    breedDataObj[index].a,
    breedDataObj[index].b,
    breedDataObj[index].c,
    breedDataObj[index].d,
  ];
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("purple");

  const handleClick = (evt: any) => {
    selectedBreedName = evt.target.innerText;
    correctBreedName = breedDataObj[index].breedName;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    setBgColor(isCorrect ? "#33FF00" : "#FF3300"); // green / red
    setColor(isCorrect ? "#336600" : "#990000"); // dark green / dark red
  };

  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        onClick={handleClick}
      >
        {answers[answerIndex]}
      </button>
    </>
  );
}

export default AnswerButton;
