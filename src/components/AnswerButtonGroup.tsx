import { breedDataObj } from "../data/gameData";
import "./AnswerButtonGroup.css";
import { useEffect, useState } from "react";

interface Props {
  questionIndex: number;
}

function AnswerButtonGroup({ questionIndex }: Props) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // when questionIndex changes reset button colors
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id !== "prev" && buttons[i].id !== "next") {
        buttons[i].style.backgroundColor = "purple";
      }
    }
  }, [questionIndex]);

  // when questionIndex changes reset disabled to false
  useEffect(() => {
    setButtonDisabled(false);
  }, [questionIndex]);

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
    correctBreedName = breedDataObj[questionIndex].breedName;

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
          {breedDataObj[questionIndex].a}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnB"
          onClick={handleClick}
        >
          {breedDataObj[questionIndex].b}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnC"
          onClick={handleClick}
        >
          {breedDataObj[questionIndex].c}
        </button>
        <button
          className="btn"
          disabled={isButtonDisabled}
          style={{ backgroundColor: "purple", color: "white" }}
          id="ansBtnD"
          onClick={handleClick}
        >
          {breedDataObj[questionIndex].d}
        </button>
      </div>
    </>
  );
}

export default AnswerButtonGroup;

// option 2 - individual component buttons
// <AnswerButton questionIndex={questionIndex} answerquestionIndex={0} />
// <AnswerButton questionIndex={questionIndex} answerquestionIndex={1} />
// <AnswerButton questionIndex={questionIndex} answerquestionIndex={2} />
// <AnswerButton questionIndex={questionIndex} answerquestionIndex={3} />
