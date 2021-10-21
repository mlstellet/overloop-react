// import css from '../assets/css/cardVagas.module.css'
import styled from 'styled-components'

const H2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    border: 0;

    font-size: 16px;
`

const Article = styled.article`
    background-color: #e8e8e8;
    margin: 0;
    padding: 0;
`

const TituloArtigo = styled.h3`
    color: #000;
    margin: 0;
    padding-top: 0;
    padding-bottom: 5px;
    font-family: 'Antic Slab', serif;
    font-size: 1.5rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 260px;
    overflow: hidden;
    
    @media(max-width:1070px) {
        h3 {
            text-align: center;
        }
    }
`
const Info = styled.div`
    width: 340px;
    height: 300px;
    margin: 30px 30px 50px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 10px;

    @media(max-width:1070px) {
        .info {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;

            gap: 40px;
        }
    }
`

const Text = styled.div`
    padding: 30px 20px;
    position: relative;
`

const P = styled.p`
    margin-top: 0;
    margin-bottom: 15px;
    padding: 12px 0;
    color: #AAA9A9;

    text-overflow: ellipsis;
    white-space: wrap;
    max-width: 600px;
    overflow: hidden;
`

const Location = styled.span`
    padding: 12px 0;
    color: #F05454;
    font-weight: 600;
`

export default function Card_Vagas({ vagas, loading }) {
    if (loading) {
        return <H2>Carregando . . .</H2>
    }

    return (
        <>
            {vagas.map(single=>(
                <Article>
                    <Info>
                        <Text>
                            <a href={single.link} target='_blank'>
                                <TituloArtigo>{single.title}</TituloArtigo>
                            </a>
                            <P dangerouslySetInnerHTML={{__html: single.snippet}} /> 
                            <Location>{single.location}</Location>
                        </Text>
                    </Info>
                </Article>
            ))}
        </>
    )
}

