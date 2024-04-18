import "../styles/AnswerButton.css";
import { breedDataObj } from "../data/gameData";
import { useEffect, useState } from "react";

interface Props {
  updateScore: () => void;
  disabled: boolean;
  questionIndex: number;
  answerIndex: number;
  answered: () => void;
}

function AnswerButton({
  updateScore,
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

  // reset the bgColor state back to initial color
  // when questionIndex changes
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

    // only call updateScore if the answer is correct
    if (isCorrect) {
      updateScore(); // triggers updateScore func in grandparent
    }

    // change background color according to correct/incorrect answer
    setBgColor(isCorrect ? "green" : "red");

    // question is answered when any AnswerButton is clicked
    // triggers onAnswered func in parent
    answered();
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
