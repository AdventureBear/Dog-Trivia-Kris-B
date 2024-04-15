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
  // const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("purple");

  // when index changes reset button colors
  useEffect(() => {
    setBgColor("purple");
    // setColor("white");
  }, [questionIndex]);

  const handleClick = (evt: any) => {
    let selectedBreedName = "";
    let correctBreedName = "";
    let isCorrect = true;
    let score = 0;

    selectedBreedName = evt.target.innerText;
    correctBreedName = breedDataObj[questionIndex].breedName;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    setBgColor(isCorrect ? "green" : "red"); // green / red
    // setColor(isCorrect ? "#336600" : "#990000"); // dark green / dark red

    answered(true);

    function keepScore() {
      if (isCorrect) {
        return (score += 1);
      }
    }

    keepScore();

    console.log("Score: " + score);
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
