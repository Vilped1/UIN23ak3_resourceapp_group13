import { Link } from "react-router-dom"
import { resources } from "../resources/resources.js"

export default function Nav({ category, setCategory }) {
  const handleClick = (newCategory) => {
    setCategory(newCategory)
  }

  const toggleMenu = () => {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("hidden")
  }

  return (
    <>
      <nav>
        <button onClick={() => toggleMenu()} className="menuToggle">
          Meny
        </button>
        <ul className="menu ">
          {resources.map((resource, index) => (
            <li key={index}>
              <Link
                className={`menubutton ${
                  resource.category === category ? "active" : ""
                }`}
                onClick={() => handleClick(resource.category)}
                to={resource.category.replaceAll(" ", "-").toLowerCase()}
              >
                {resource.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
