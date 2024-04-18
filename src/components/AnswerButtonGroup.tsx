import "../styles/AnswerButtonGroup.css";
import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";

interface Props {
  updateScore: () => void;
  questionIndex: number;
}

function AnswerButtonGroup({ questionIndex, updateScore }: Props) {
  const [isAnswered, setIsAnswered] = useState(false);

  // reset the isAnswered state back to false to toggle disabled property
  // when questionIndex changes
  useEffect(() => {
    setIsAnswered(false);
  }, [questionIndex]);

  // once question is answered (AnswerButton clicked) change isAnswered state
  // to trigger disabled property
  const onAnswer = () => {
    setIsAnswered(true);
  };

  return (
    <div className="container" id="AnswerButtonGroup">
      <AnswerButton
        updateScore={() => updateScore()}
        disabled={isAnswered}
        answered={() => onAnswer()} // callback passed to AnswerButton
        questionIndex={questionIndex}
        answerIndex={0}
      />
      <AnswerButton
        updateScore={() => updateScore()}
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={1}
      />
      <AnswerButton
        updateScore={() => updateScore()}
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={2}
      />
      <AnswerButton
        updateScore={() => updateScore()}
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={3}
      />
    </div>
  );
}

export default AnswerButtonGroup;
