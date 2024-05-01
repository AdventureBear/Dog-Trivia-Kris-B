import "../styles/AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";

interface Props {
  questionIndex: number;
  isAnswered: boolean
    onAnswerClick: (option: number)=>void
    options: string[],
    correctAnswerButton: number

}

function AnswerButtonGroup({ questionIndex, onAnswerClick, options, isAnswered, correctAnswerButton }: Props) {

  const buttons = []
    for (let i=0; i<4; i++ ){

        buttons.push(
            <AnswerButton
                isAnswered={isAnswered}
                onAnswerClick ={onAnswerClick}
                key={i}
                answer={options[i]}
                correctAnswerButton = {correctAnswerButton}
                questionIndex={questionIndex}
                answerIndex={i}
            />
        )
    }


  return (
    <div className="container" id="AnswerButtonGroup">
        {buttons.map(button => button)}
    </div>
  );
}

export default AnswerButtonGroup;
