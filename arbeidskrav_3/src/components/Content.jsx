import { resources } from '../resources/resources.js'

export default function Content({ category }) {

    // Filtrerer gjennom "resources" om å filtrere ut resurss kortene som har card.category som er lik "category"
    const filterCard = resources.filter(card => card.category === category)

    return (
        <>
            {/* Går gjennom alle objektene i arrayen */}
            {filterCard.map((card, index) =>
            // Legger inn korrekt HTML struktur for riktig visning av resurss kortene
                <article key={index}>
                    <h1>{card.category}</h1>
                    <p>{card.text}</p>
                    <section>
                        <ul>
                            {/* Går gjennom alle objektene i arrayen til hvert enkelt objekt som blir mappet */}
                            {card.sources.map((link, index) =>
                                <li key={index}><a href={link.url}>{link.title}</a></li>
                            )}
                        {/* Sørger for at taggene er avsluttet */}
                        </ul>
                    </section>
                </article>
            )}

        </>
    )
}