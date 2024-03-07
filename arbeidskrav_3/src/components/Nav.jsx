import { Link } from "react-router-dom"
import { resources } from "../resources/resources.js"

export default function Nav({ category, setCategory }) {
  const handleClick = (newCat) => {
    setCategory(newCat)
  }

  return (
    <>
      <nav>
        <ul id="menu">
          {resources.map((resource, index) => (
            <li key={index}>
              <Link
                onClick={() => handleClick(resource.category)}
                className={`menubutton ${
                  resource.category === category ? "active" : ""
                }`}
                to={resource.category.split(" ")[0].toLowerCase()}
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
