import "../styles/AnswerButton.css";
import { breedDataObj } from "../data/gameData";
import { useEffect, useState } from "react";

// try adding useEffect to reset the button when the QUESTION index changes

interface Props {
  disabled: boolean;
  questionIndex: number;
  answerIndex: number;
  answered: (answered: boolean) => void;
}

function AnswerButton({
  disabled,
  questionIndex,
  answerIndex,
  answered,
}: Props) {
  let answers = [
    breedDataObj[questionIndex].a,
    breedDataObj[questionIndex].b,
    breedDataObj[questionIndex].c,
    breedDataObj[questionIndex].d,
  ];
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("purple");

  // when index changes reset button colors
  useEffect(() => {
    setBgColor("purple");
    setColor("white");
  }, [questionIndex]);

  const handleClick = (evt: any) => {
    let selectedBreedName = "";
    let correctBreedName = "";
    let isCorrect = true;

    selectedBreedName = evt.target.innerText;
    correctBreedName = breedDataObj[questionIndex].breedName;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    setBgColor(isCorrect ? "#33FF00" : "#FF3300"); // green / red
    setColor(isCorrect ? "#336600" : "#990000"); // dark green / dark red

    answered(true);
  };

  return (
    <>
      <button
        className="answerButton"
        disabled={disabled}
        style={{ backgroundColor: bgColor, color: color }}
        onClick={handleClick}
      >
        {answers[answerIndex]}
      </button>
    </>
  );
}

export default AnswerButton;
