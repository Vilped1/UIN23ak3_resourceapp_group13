import { Link } from "react-router-dom"
// Impoterer ressursene fra resoursce.js fila
import { resources } from "../resources/resources.js"

export default function Nav({ category, setCategory }) {
  const handleClick = (newCategory) => {
    // Oppdaterer kategorien med nav-funksjonen
    setCategory(newCategory)
  }

  return (
    <>
      <nav>
        <ul className="menu ">
          {/* Mapper gjennom ressursene og genererer lenker */}
          {resources.map((resource, index) => (
            <li key={index}>
              {/* Link-komponenten sender brukeren til riktig path og setter
              kategorien til å være lik den kategorien som er valgt. Om
              kategorien er lik den kategorien som er valgt, vil klassen
              "active" legges til */}
              <Link
                className={`menubutton ${
                  resource.category === category ? "active" : ""
                }`}
                // Handleclick kalles når en link klikkes på
                onClick={() => handleClick(resource.category)}
                /* Matcher to med Routing-path oppgitt i App.jsx */
                to={resource.category.split(" ")[0].toLowerCase()}
              >
                {/* Gjør at kategorinavnet vises istedenfor lenken */}
                {resource.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
