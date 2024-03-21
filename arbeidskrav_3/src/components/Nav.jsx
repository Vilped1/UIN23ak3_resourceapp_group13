import { Link } from "react-router-dom"
//Impoterer ressursene fra resoursce.js fila
import { resources } from "../resources/resources.js"

export default function Nav({ category, setCategory }) {
  //Handleclick kalles når en link klikkes på
  const handleClick = (newCategory) => {
    //Oppdatere kategorien med ven-funksjonen
    setCategory(newCategory)
  }

  return (
    <>
      <nav>
        <ul className="menu ">
          {/* Mapper gjennom ressursene og generere lenker */}
          {resources.map((resource, index) => (
            <li key={index}>
              <Link
                className={`menubutton ${resource.category === category ? "active" : ""
                  }`}
                onClick={() => handleClick(resource.category)}
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
