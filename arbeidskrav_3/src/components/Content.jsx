import { useParams } from 'react-router-dom'
import { resources } from '../resources/ressurser.js'
import { useEffect } from 'react'

export default function Content({ cat, setCat}) {

    // const { slug } = useParams()
    // console.log(slug)

    const filterCard = resources.filter(card => card.category === cat)

    // useEffect(() => {
    //     setCat(cat.filter(cat => cat.category === slug))
    // }, [])

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