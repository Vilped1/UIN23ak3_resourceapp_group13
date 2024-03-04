import { useState } from "react";

export default function Nav({cat, setCat}) { 
  let navItems = [
    "HTML",
    "CSS",
    "Javascipt",
    "React",
    "Sanity og Headless CMS",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="button-group">
        {/* map function som mapper ut ifra array, gir og fjerner "active" styling etter trykk (Bootstrap)*/}
        {navItems.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "nav-button active" : "nav-button"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              setCat("React")
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
