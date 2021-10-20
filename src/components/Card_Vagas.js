import css from '../assets/css/cardVagas.module.css'

export default function Card_Vagas({ vagas, loading }) {
    if (loading) {
        return <h2>Carregando...</h2>
    }

    return (
        <>
            {vagas.map(single=>(
                <section className={css.content}>
                    <article className={css.job}>
                        <div className={css.job_info}>
                            <div className={css.text}>
                                <a href={single.link} target='_blank'><h2 className={css.tipo}>{single.title}</h2></a>
                            <p className={css.descricao} dangerouslySetInnerHTML={{__html: single.snippet}} /> 
                            <span className={css.location}>{single.location}</span>
                            </div>
                        </div>
                    </article>
                </section>
            ))}
        </>
    )
}

