import css from "../assets/css/cardTutoriais.module.css";

function CardTutoriais({data}) {
    return (
        <div> 
            {data.map(item => {
                return (
                    <article>
                        <div className={css.container}>
                            <div className={css.logo}>
                                <img src={item.logo} alt="" />
                            </div>
                            <div className={css.texto}>
                                <h3 key={item.chave}>{item.nome}</h3>
                                <p key={item.chave}>{item.descricao}</p>
                                <ul>
                                    <li><a href={item.link1} target="_blank">{item.nomeLink1}</a></li>
                                    <li><a href={item.link2} target="_blank">{item.nomeLink2}</a></li>
                                </ul>
                            </div>
                        </div>
                    </article> 
                );
            })}
        </div>
    );
}

export default CardTutoriais;