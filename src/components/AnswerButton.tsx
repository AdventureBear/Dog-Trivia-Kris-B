import { breedDataObj } from "../data/gameData";
import { useEffect, useState } from "react";

// try adding useEffect to reset the button when the QUESTION index changes

interface Props {
  index: number;
  answerIndex: number;
}

function AnswerButton({ index, answerIndex }: Props) {
  let answers = [
    breedDataObj[index].a,
    breedDataObj[index].b,
    breedDataObj[index].c,
    breedDataObj[index].d,
  ];
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("purple");

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // when index changes reset button colors
  useEffect(() => {
    setBgColor("purple");
    setColor("white");
  }, [index]);

  useEffect(() => {
    setButtonDisabled(false);
  }, [index]);

  const handleClick = (evt: any) => {
    let selectedBreedName = "";
    let correctBreedName = "";
    let isCorrect = true;

    const disableButton = () => {
      setButtonDisabled(true);
    };

    console.log(evt);

    selectedBreedName = evt.target.innerText;
    correctBreedName = breedDataObj[index].breedName;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    setBgColor(isCorrect ? "#33FF00" : "#FF3300"); // green / red
    setColor(isCorrect ? "#336600" : "#990000"); // dark green / dark red

    disableButton();
  };

  return (
    <>
      <button
        disabled={isButtonDisabled}
        style={{ backgroundColor: bgColor, color: color }}
        onClick={handleClick}
      >
        {answers[answerIndex]}
      </button>
    </>
  );
}

export default AnswerButton;
