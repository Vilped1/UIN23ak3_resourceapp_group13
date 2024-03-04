import { useState } from "react";

export default function Nav() {
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
      <ul className="list-group">
        {/* map function som mapper ut ifra array, gir og fjerner "active" styling etter trykk (Bootstrap)*/}
        {navItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
