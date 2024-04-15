interface Props {
  disabled: boolean;
  onClick: () => void;
}

function PreviousButton({ disabled, onClick }: Props) {
  return (
    <>
      <button disabled={disabled} id="prev" onClick={onClick}>
        Play Again
      </button>
    </>
  );
}

export default PreviousButton;
