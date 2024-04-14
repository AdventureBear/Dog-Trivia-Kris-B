interface Props {
  onClick: () => void;
}

function NextButton({ onClick }: Props) {
  return (
    <>
      <button
        disabled={false}
        id="next"
        style={{ float: "right" }}
        onClick={onClick}
      >
        Next
      </button>
    </>
  );
}

export default NextButton;
