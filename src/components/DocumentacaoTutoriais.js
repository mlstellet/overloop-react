// import stack from '../assets/img/tutoriais-stacko.svg'
import css from '../assets/css/cardDocumentacao.module.css'

const links = [
    {
        "chave": 1,
        "nome": "Logo Stack Overflow",
        "imagem": "../img/tutoriais-stacko.svg",
        "link": 'https://stackoverflow.com/'
    },
    {
        "chave": 2,
        "nome": "Logo W3 Schools",
        "imagem": "../img/tutoriais-w3eschools.svg",
        "link": 'https://www.w3schools.com/'
    },
    {
        "chave": 3,
        "nome": "Logo CSS Tricks",
        "imagem": "../img/tutoriais-csstricks.svg",
        "link": 'https://css-tricks.com/'
    },
    {
        "chave": 4,
        "nome": "Logo W3C",
        "imagem": "../img/tutoriais-w3c.svg",
        "link": 'https://www.w3c.br/'
    },
    {
        "chave": 5,
        "nome": "Logo Dev Docs",
        "imagem": "../img/tutoriais-devdocs.svg",
        "link": 'https://devdocs.io/'
    },
    {
        "chave": 6,
        "nome": "Logo MDN Web Docs",
        "imagem": "../img/tutoriais-mozilla.svg",
        "link": 'https://developer.mozilla.org/pt-BR/'
    },
]

{/* <Element key={identificador} prop1={gdbhbgdhb}/> */ }

function DocumentacaoTutoriais() {
    return (
        <section className={css.documentacao}>
            <div className={css.container}>
                <h2>Em caso de dúvida, não deixe de recorrer a...</h2>
                <div className={css.fontes}> 
                {
                    links.map(item => {
                        return <a key={item.chave} href={item.link}>
                            <img key={item.chave} src={item.imagem} alt={item.nome} />
                        </a>
                    })
                }
                </div>

            </div>
        </section>
    );
}

export default DocumentacaoTutoriais;