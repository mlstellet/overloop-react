import styled from "styled-components";

const Article = styled.article`
    background-color: #fff;
    margin: 60px 0;
    max-width: 100%;
    padding: 60px 0;

    @media (max-width: 743px) {
        article {
            text-align: center;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 100px;
    max-width: 100%;
    width: 1000px;
    margin: 0 auto;

    @media (max-width: 899px) {
        div {
            margin: 0 auto;
            padding-bottom: 0;
            gap: 0;
        }
    }
`

const H3 = styled.h3`
    font-family: 'Antic Slab', serif;
    max-width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 10px;
    padding-top: 40px;
    border-bottom: 3px solid #222831;
    display: inline-block;
`

const P = styled.p`
    text-align: justify;
    padding: 20px 0 40px 0;
    max-width: 100%;

    @media (max-width: 743px) {
        p {
            text-align: center;
        }
    }
`

const Img = styled.img`
    width: 200px;
    max-width: 100%;

    @media (max-width: 743px) {
        article img {
            margin-top: 50px;
        }
    }
`

const A = styled.a`
    text-decoration: underline;
    font-family: 'Urbanist', sans-serif;
    color: #F05454;
    max-width: 100%;
`

const Li = styled.li`
    padding: 2px;
    max-width: 100%;
    list-style: circle;
    color: #F05454;
`


const Texto = styled.div`
    width: 500px;
    max-width: 100%;
    font-family: 'Urbanist', sans-serif;

    @media (max-width: 899px) {
        div {
            margin: 30px;
            width: 500px;
        }
    }
`

// .container h2 {
//     font-family: 'Urbanist', sans-serif;
//     font-weight: 400;
//     margin-top: 50px;
//     max-width: 100%;
// }


//  @media (max-width: 899px) {
//     .outras-fontes .container h2 {
//         text-align: center;
//         margin-bottom: 45px;
//     }
//       h2 {
//         margin-bottom: 0;
//     }
// } 


function CardTutoriais({data}) {
    return (
        <> 
            {data.map(item => {
                return (
                    <Article>
                        <Container>
                            <div className="logo}">
                                <Img src={item.logo} alt="" />
                            </div>
                            <Texto>
                                <H3 key={item.chave}>{item.nome}</H3>
                                <P>{item.descricao}</P>
                                <ul>
                                    <Li>
                                        <A href={item.link1} target="_blank">{item.nomeLink1}</A>
                                    </Li>
                                    <Li>
                                        <A href={item.link2} target="_blank">{item.nomeLink2}</A>
                                    </Li>
                                </ul>
                            </Texto>
                        </Container>
                    </Article> 
                );
            })}
        </>
    );
}

export default CardTutoriais;