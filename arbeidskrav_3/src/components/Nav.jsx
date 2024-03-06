import { useState } from "react";
import { resources } from "../resources/ressurser";

export default function Nav({ cat, setCat }) {
  // Ta vekk den
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
                // cat === index.category ? "nav-button active" : "nav-button" Kan bruke denne
              }
              key={item}
              onClick={() => {
                // Og ta vekk den
                setSelectedIndex(index);
                handleClick(item.category);
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
