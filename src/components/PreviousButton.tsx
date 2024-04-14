interface Props {
  onClick: () => void;
}

function PreviousButton({ onClick }: Props) {
  return (
    <>
      <button
        disabled={false}
        id="prev"
        style={{ marginRight: "50px" }}
        onClick={onClick}
      >
        Previous
      </button>
    </>
  );
}

export default PreviousButton;
