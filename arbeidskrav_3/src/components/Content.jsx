import { resources } from "../resources/resources.js"

export default function Content({ category }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  )

  return (
    <>
      {filteredResources.map((resource, index) => (
        <article key={index} id="card">
          <h1>{resource.category}</h1>
          <p>{resource.text}</p>
          <section>
            <ul>
              {resource.sources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url}>{resource.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      ))}
    </>
  )
}
