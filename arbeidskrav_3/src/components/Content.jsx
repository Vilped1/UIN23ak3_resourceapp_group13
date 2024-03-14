import { resources } from '../resources/ressurser.js'

export default function Content({ cat, setCat }) {

    const filterCard = resources.filter(card => card.category === cat)

    return (
        <>
            {filterCard.map((card, index) =>
                <article id="card" key={index}>
                    <h1>{card.category}</h1>
                    <p>{card.text}</p>
                    <section>
                        <ul>
                            {card.sources.map((link, index) =>
                                <li key={index}><a href={link.url}>{link.title}</a></li>
                            )}
                        </ul>
                    </section>
                </article>
            )}

        </>
    )
}