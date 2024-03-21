import { Link } from "react-router-dom"
import { resources } from "../resources/resources.js"

export default function Nav({ category, setCategory }) {
  const handleClick = (newCategory) => {
    setCategory(newCategory)
  }

  return (
    <>
      <nav>
        <ul className="menu ">
          {resources.map((resource, index) => (
            <li key={index}>
              // Link-komponenten sender brukeren til riktig path og setter
              kategorien til å være lik den kategorien som er valgt. Om
              kategorien er lik den kategorien som er valgt, vil klassen
              "active" legges til.
              <Link
                className={`menubutton ${
                  resource.category === category ? "active" : ""
                }`}
                onClick={() => handleClick(resource.category)}
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
