import { breedDataObj } from "../data/gameData";
import "./AnswerButtonGroup.css";
import { useEffect, useState } from "react";

interface Props {
  index: number;
}

function AnswerButtonGroup({ index }: Props) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // when index changes reset button colors
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id !== "prev" && buttons[i].id !== "next") {
        buttons[i].style.backgroundColor = "purple";
      }
    }
  }, [index]);

  // when index changes reset disabled to false
  useEffect(() => {
    setButtonDisabled(false);
  }, [index]);

  let correctBreedName = "";
  let selectedBreedName = "";
  let activeButton = "";
  let isCorrect = true;

  const handleClick = (evt: any) => {
    const disableButton = () => {
      setButtonDisabled(true);
    };

    const buttons = document.querySelectorAll("button");

    selectedBreedName = evt.target.innerText;
    activeButton = evt.target.id;
    correctBreedName = breedDataObj[index].breedName;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === activeButton) {
        buttons[i].classList.add("active");
        buttons[i].style.backgroundColor = isCorrect ? "green" : "red";
      }
    }

    disableButton();
  };

  return (
    <>
      <div className="btn-group" id="AnswerButtonGroup">
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnA"
          onClick={handleClick}
        >
          {breedDataObj[index].a}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnB"
          onClick={handleClick}
        >
          {breedDataObj[index].b}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnC"
          onClick={handleClick}
        >
          {breedDataObj[index].c}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
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

// option 2 - individual component buttons
// <AnswerButton index={index} answerIndex={0} />
// <AnswerButton index={index} answerIndex={1} />
// <AnswerButton index={index} answerIndex={2} />
// <AnswerButton index={index} answerIndex={3} />
