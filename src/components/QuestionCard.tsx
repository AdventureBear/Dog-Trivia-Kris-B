import "../styles/QuestionCard.css";
import {Card, CardBody, CardImg} from "reactstrap";
import {breedDataObj} from "../data/gameData.js";
import {useState} from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";
import ResetButton from "./ResetButton.js";
import { wrongAnswersA, wrongAnswersB, wrongAnswersC } from "../data/answerData";
import { breedImageArr } from "../data/imageData";
import { breedNameArr } from "../data/nameData";

function QuestionCard() {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);

    const randomAnswerIndex = Math.floor(Math.random()*4)
    const options = [
        wrongAnswersA[questionIndex], // Assuming wrongAnswersA is an array of incorrect answers
        wrongAnswersB[questionIndex], // Assuming wrongAnswersB is another array of incorrect answers
        breedNameArr[questionIndex],  // Assuming breedNameArr contains the correct answers
        wrongAnswersC[questionIndex]  // Assuming wrongAnswersC is another array of incorrect answers
    ];
    function shuffleOptions(options: string[]) {
        const shuffled = [];
        for (let i = 0; i < options.length; i++) {
            const pos = (randomAnswerIndex + i) % options.length;
            shuffled[pos] = options[i];
        }
        return shuffled;
    }

// Shuffle the options array
    const shuffledOptions = shuffleOptions(options);



    const questionData = {
        options: shuffledOptions,
        correctAnswer:  breedNameArr[questionIndex],
        image: breedImageArr[questionIndex]
    }

    const correctAnswerButton = questionData.options.indexOf(questionData.correctAnswer)

    const updateScore = () => {
        setScore(score + 1);
    };


  const onAnswerClick = (option: number) => {
      setIsAnswered(true);

      if (option === correctAnswerButton) {
          updateScore()
      }

  };

    const incrementQuestionIndex = () => {
        setQuestionIndex(questionIndex + 1);
        setIsAnswered(false)
    };

    const decrementQuestionIndex = () => {
        setQuestionIndex(questionIndex - 1);
    };

    const resetQuestionIndex = () => {
        setQuestionIndex(0);
        setScore(0);
    };

    return (
        <div className="d-flex justify-content-center">
            <Card className="main-card">
                <CardBody>
                    <CardImg
                        className="card-image"
                        src={questionData.image}
                        alt={`Photo of ${questionData.correctAnswer}`}
                    />

                    <div className="text-center" id="ntbTextSection">
                        <p className="card-text">
                            What is the name of the dog breed pictured above?
                        </p>
                    </div>
                    <div id="answerButtonSection">
                            <AnswerButtonGroup
                                options = {questionData.options}
                                onAnswerClick ={onAnswerClick}
                                isAnswered ={isAnswered}
                                correctAnswerButton = {correctAnswerButton}
                                questionIndex={questionIndex}
                            />
                    </div>

                    <div
                        className="d-flex justify-content-between flex-row align-items-center"
                        id="navSection"
                    >
                            <PreviousButton
                                disabled={
                                    questionIndex === 0 || questionIndex === breedDataObj.length - 1
                                }
                                onClick={() => decrementQuestionIndex()}
                            />
                        <div id="midCol" className="d-flex flex-column">
                            <span>Question #{breedDataObj[questionIndex].questionId}</span>
                            <div id="score">🐶Score {score}/20🐶</div>
                        </div>
                            {questionIndex !== breedDataObj.length - 1 ? (
                                <NextButton
                                    disabled={questionIndex === breedDataObj.length - 1}
                                    onClick={() => incrementQuestionIndex()}
                                />
                            ) : (
                                <ResetButton
                                    disabled={questionIndex !== breedDataObj.length - 1}
                                    onClick={() => resetQuestionIndex()}
                                />
                            )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default QuestionCard;
