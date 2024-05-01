import "../styles/AnswerButton.css";

interface Props {
  answer: string,
  questionIndex: number;
  onAnswerClick: (option: number) => void
  correctAnswerButton: number
  answerIndex: number;
  isAnswered: boolean
}

function AnswerButton({
    answer,
  onAnswerClick,
correctAnswerButton,
  answerIndex,
    isAnswered
}: Props) {

  const isCorrect = correctAnswerButton===answerIndex
  const bgColor = ((isAnswered)? (isCorrect ? "green": "red") : "purple");

  const handleClick = () => {
    onAnswerClick(answerIndex)
    // console.log("Clicked: ", answer)
  }

  return (
    <>
      <button
        className="answerButton"
        disabled={isAnswered}
        style={
          isAnswered
            ? { backgroundColor: bgColor, opacity: 0.7 }
            : { backgroundColor: bgColor }
        }
        onClick={()=>handleClick()}
      >
        {answer}
      </button>
    </>
  );
}

export default AnswerButton;
