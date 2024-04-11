import "./AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";

interface Props {
  index: number;
}

function AnswerButtonGroup({ index }: Props) {
  return (
    <>
      <div className="btn-group" id="AnswerButtonGroup">
        <AnswerButton index={index} answerIndex={0} />
        <AnswerButton index={index} answerIndex={1} />
        <AnswerButton index={index} answerIndex={2} />
        <AnswerButton index={index} answerIndex={3} />
      </div>
    </>
  );
}

export default AnswerButtonGroup;
