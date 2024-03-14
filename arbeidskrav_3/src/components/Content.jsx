import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { resources } from "../resources/ressurser.js";

export default function Content({ cat, setCat }) {
  // ----> Ser ut som Sanity object blir filtrert ut her på et eller annet vis,
  // ----> dukker opp om man mapper direkte fra ressurser.js
  const filterCard = resources.filter((card) => card.category === cat);
  // useEffect(() => {
  //     setCat(cat.filter(cat => cat.category === slug))
  // }, [])

  return (
    <>
      {filterCard.map((card, index) => (
        <article id="card" key={index}>
          <h1>{card.category}</h1>
          <p>{card.text}</p>
          <section>
            <ul>
              {card.sources.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      ))}
    </>
  );
}
