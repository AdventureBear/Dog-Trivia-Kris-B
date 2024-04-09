import { useState } from "react";

// object - {items: [], onSelectedItem: function}
interface Props {
  items: string[];
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, onSelectedItem }: Props) {
  //Hook
  // arr[0]; variable selected index
  // arr[1]; updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
