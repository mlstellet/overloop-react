import sobreFoto from "../assets/img/home-sobre.png"
import missaoIcon from "../assets/img/home-missao.svg"
import vagasIcon from "../assets/img/home-vagas.svg"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Banner from "../components/Banner"
import FlexContainer from "../components/FlexContainer"
import Slider from "../components/Slider"
import Quadro from "../components/Quadro"
import Button from "../components/Button"
import H2 from "../components/H2"
import P from "../components/P"
import Text from "../components/Text"


function Home() {
    return (
        <>
            <Header fundo="transparente"/>
            <Banner title="Além do Loop" url="/img/home-banner.png"/>
            <FlexContainer secao="sobre">
                <Text>
                    <H2 h2="Sobre" />
                    <P>
                        O overLoop é um portal de comunicação de tecnologia. Aqui você poderá encontrar diferentes assuntos que envolvam inovação, criatividade, aprendizado e muita, mais muita colaboração!
                    </P>
                </Text>
                <img src={sobreFoto} alt="" />
            </FlexContainer>

            <FlexContainer secao="missao-valores">
                    <img className="icon" src={missaoIcon} alt="" />
                    <Text>
                        <H2 h2="Missão" />
                        <P>
                            Nosso propósito é garantir o conteúdo de qualidade para todes nossos usuários de tecnologia.
                            <br/>
                            Conteúdo gratuito e de qualidade para todes.
                        </P>
                        <H2 h2="Valores" />
                        <P>
                            #aprendemos, ensinamos, renovamos;
                            <br/>
                            #é tudo sobre colaborar, juntes vamos mais longe;
                        </P>
                    </Text>
            </FlexContainer>

            <FlexContainer secao="vagas">
                <Text>
                    <H2 h2="Vagas" />
                    <P>
                        Conheça as vagas disponíveis no mercado para as áreas de de front-end, back-end, ciência de dados, Dev-ops e muitas outras.
                    </P>
                    <Button text="Buscar" link="/vagas"/>
                </Text>
                <img className="icon" src={vagasIcon} alt="" />
            </FlexContainer>

            <FlexContainer secao="pessoas">
                <H2 h2="Pessoas que nos inspiram" />
                <Quadro />
                <P>
                    Conheça mais sobre essas e outras histórias incríveis!
                </P>
                <Button text="Inspire-se!" link="/inspiracoes" />
            </FlexContainer>

            <FlexContainer secao="mulheres">
                <H2 h2="Mulheres em destaque" />

                    <div className="glider-contain">
                        <div className="glider">
                            <img src="../img/foto1-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto2-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto3-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto4-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto1-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto4-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto3-mulherdestaque-home.png" alt="" />
                            <img src="../img/foto2-mulherdestaque-home.png" alt="" />
                        </div>
                    
                        <button aria-label="Previous" className="glider-prev">«</button>
                        <button aria-label="Next" className="glider-next">»</button>
                        <div role="tablist" className="dots"></div>
                    </div>
            </FlexContainer>

            <FlexContainer secao="code-break" />

            <FlexContainer secao="tutoriais">
                <H2 h2="Tutoriais" />

                    <Slider />

                    <P>
                        Aprenda com os melhores e o melhor: <strong>de graça!</strong>
                    </P>
                    <Button text="Aprenda agora!" link="/tutoriais" />
            </FlexContainer>

            <Footer />
        </>
    )
}

export default Home