import "../styles/AnswerButton.css";
import { breedDataObj } from "../data/gameData";
import { useEffect, useState } from "react";

// try adding useEffect to reset the button when the QUESTION index changes

interface Props {
  scored: () => void;
  disabled: boolean;
  questionIndex: number;
  answerIndex: number;
  answered: (answered: boolean) => void;
}

function AnswerButton({
  scored,
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

  const [bgColor, setBgColor] = useState("purple");

  // when index changes reset button colors
  useEffect(() => {
    setBgColor("purple");
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

    if (isCorrect) {
      scored();
    }

    setBgColor(isCorrect ? "green" : "red"); // green / red

    answered(true);
  };

  return (
    <>
      <button
        className="answerButton"
        disabled={disabled}
        style={
          disabled
            ? { backgroundColor: bgColor, opacity: 0.7 }
            : { backgroundColor: bgColor }
        }
        onClick={handleClick}
      >
        {answers[answerIndex]}
      </button>
    </>
  );
}

export default AnswerButton;
