import QuestionCard from "./QuestionCard";

interface Props {
  index: number;
}

function NextButton({ index }: Props) {
  const handleNextClick = () => {
    index += 1;
    console.log(index);
    <QuestionCard index={index} />;
  };

  return (
    <button style={{ float: "right" }} onClick={handleNextClick}>
      Next
    </button>
  );
}

export default NextButton;
