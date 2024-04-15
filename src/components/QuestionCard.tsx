import { Card, CardBody, CardImg } from "reactstrap";
import { breedDataObj } from "../data/gameData.js";
import { useState } from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";

function QuestionCard() {
  const [questionIndex, setquestionIndex] = useState(0);

  const incrementquestionIndex = () => {
    setquestionIndex(questionIndex + 1);
  };

  const decrementquestionIndex = () => {
    setquestionIndex(questionIndex - 1);
  };

  return (
    <div className="d-flex justify-content-center p-2">
      <Card style={{ width: "30rem" }}>
        <CardImg
          src={breedDataObj[questionIndex].imagePath}
          alt="image"
          style={{ width: "100%", height: "300px" }}
        />

        <CardBody>
          <p className="card-text">
            What is the name of the dog breed pictured above?
          </p>
        </CardBody>
        <CardBody>
          <div>
            <AnswerButtonGroup questionIndex={questionIndex} />
          </div>
        </CardBody>

        <CardBody>
          <PreviousButton
            disabled={questionIndex === 0}
            onClick={() => decrementquestionIndex()}
          />
          <span>Question #{breedDataObj[questionIndex].questionId}</span>
          <NextButton
            disabled={questionIndex === breedDataObj.length - 1}
            onClick={() => incrementquestionIndex()}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;
