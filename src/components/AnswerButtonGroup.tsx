import "../styles/AnswerButtonGroup.css";
import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";

interface Props {
  questionIndex: number;
}

function AnswerButtonGroup({ questionIndex }: Props) {
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setIsAnswered(false);
  }, [questionIndex]);

  const onAnswer = () => {
    setIsAnswered(true);
  };

  return (
    <div className="container" id="AnswerButtonGroup">
      <AnswerButton
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={0}
      />
      <AnswerButton
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={1}
      />
      <AnswerButton
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={2}
      />
      <AnswerButton
        disabled={isAnswered}
        answered={() => onAnswer()}
        questionIndex={questionIndex}
        answerIndex={3}
      />
    </div>
  );
}

export default AnswerButtonGroup;
