import { useState } from "react";
import { resources } from "../resources/ressurser";

export default function Nav({ cat, setCat }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (newCat) => {
    setCat(newCat);
  };

  return (
    <>
      <nav>
        <ul className="button-group">
          {/* map function som mapper ut ifra array, gir og fjerner "active" styling etter trykk (Bootstrap)*/}
          {resources.map((item, index) => (
            <li
              className={
                selectedIndex === index ? "nav-button active" : "nav-button"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                handleClick(item);
                console.log(cat);
              }}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
