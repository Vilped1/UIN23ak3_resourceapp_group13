import { useState } from "react";

export default function Nav({cat, setCat}) { 
  let navItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Sanity and headless CMS"
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (newCat) => {
    setCat(newCat)
  } 

  return (
    <>
    <nav> {/*!!*/}
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
              handleClick(item)
              console.log(cat)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      </nav> {/*!!*/}
    </>
  );
}
