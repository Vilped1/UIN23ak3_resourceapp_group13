import { Link, useParams } from "react-router-dom"
import { resources } from "../resources/resources.js"

export default function Content({ category }) {
  const { slug } = useParams()

  const filteredResources = resources.filter(
    (resource) => resource.category === slug
  )

  return (
    <>
      <Link to="/HTML">Home</Link>
      {filteredResources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.category}</h2>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map((resource, index) => (
              <li key={index}>
                <Link to={resource.url}>{resource.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
