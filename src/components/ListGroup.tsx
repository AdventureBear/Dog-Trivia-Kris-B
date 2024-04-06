import { useState } from "react";

// object - {items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  // {item: string} => void
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  //Hook
  // arr[0]; variable selected index
  // arr[1]; updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
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
