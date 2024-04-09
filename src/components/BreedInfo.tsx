// let breedNames = [
//   "Golden Retriever",
//   "Bernese Mountain Dog",
//   "Pug",
//   "Chihuahua",
// ];

// object - {items: [], onSelectedItem: function}
interface BreedProps {
  breedNames: string[];
  //breedName: string;
  // onSelectedItem: (item: string) => void;
}

function BreedInfo({ breedNames }: BreedProps) {
  return (
    <>
      <div className="list-group list-group-flush">
        {breedNames.map((breedName) => (
          <p key={breedName}>{breedName}</p>
        ))}
      </div>
    </>
  );
}

export default BreedInfo;
