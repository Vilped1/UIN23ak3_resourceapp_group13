import { resources } from '../resources/ressurser.js'

export default function Content({ category }) {

    const filterCard = resources.filter(card => card.category === category)

    return (
        <>
            {filterCard.map((card, index) =>
                <article key={index}>
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