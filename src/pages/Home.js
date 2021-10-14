import Footer from "../components/Footer"
import Header from "../components/Header"
import Banner from "../components/Banner"
import sobreFoto from "../img/foto-sobre-home.png"
import FlexContainer from "../components/FlexContainer"
import Painel from "../components/Painel"
import Button from "../components/Button"

import css from "../assets/css/home.module.css"

function Home() {
    return (
        <>
            <Header fundo="transparente"/>
            <Banner title="Além do Loop" url="/img/home-banner.png"/>
            <FlexContainer secao="sobre">
                <div className="text">
                    <h2>Sobre</h2>
                    <p>
                        O overLoop é um portal de comunicação de tecnologia. Aqui você poderá encontrar diferentes assuntos que envolvam inovação, criatividade, aprendizado e muita, mais muita colaboração!
                    </p>
                </div>
                <img src={sobreFoto} alt="" />
            </FlexContainer>

            <FlexContainer secao="missao-valores">
                    <img className="icon" src="../img/icon-missao.svg" alt="" />
                    <div className="text">
                        <h2>Missão</h2>
                        <p>
                            Nosso propósito é garantir o conteúdo de qualidade para todes nossos usuários de tecnologia.
                            <br/>
                            Conteúdo gratuito e de qualidade para todes.
                        </p>
                        <h2>Valores</h2>
                        <p>
                            #aprendemos, ensinamos, renovamos;
                            <br/>
                            #é tudo sobre colaborar, juntes vamos mais longe;
                        </p>
                    </div>
            </FlexContainer>

            <FlexContainer secao="vagas">
                <div className="text">
                    <h2>Vagas</h2>
                    <p>
                        Conheça as vagas disponíveis
                        no mercado para as áreas de de front-end,
                        back-end, ciência de dados, Dev-ops e muitas outras.
                    </p>
                    <Button text="Buscar"/>
                </div>
                <img className="icon" src="../img/icon-vagas-home.svg" alt="" />
            </FlexContainer>

            <FlexContainer secao="pessoas">
                    <h2>Pessoas que nos inspiram</h2>
                    <div className={css.pessoas_imagens}>
                        <Painel 
                            frase="❝Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo.❞"
                            autor="Albert Einstein"
                            url="/img/home-painel1.png"
                            grid_area="foto-1"
                        />
                        <Painel 
                            frase="❝Se você não sabe onde quer ir, qualquer caminho serve.❞"
                            autor="Alice no País da Maravilhas"
                            url="/img/home-painel2.png"
                            grid_area="foto-2"
                        />
                        <Painel 
                            frase="❝Dê o seu melhor todos os dias, mesmo que isso aparente não ter retorno nenhum.❞"
                            autor="Alguém disse"
                            url="/img/home-painel3.png"
                            grid_area="foto-3"
                        />
                        <Painel 
                            frase="❝Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam.❞"
                            autor="Thomas Edison"
                            url="/img/home-painel4.png"
                            grid_area="foto-4"
                        />
                        <Painel 
                            frase="❝A melhor maneira de prever o futuro é criá-lo.❞"
                            autor="Peter Drucker"
                            url="/img/home-painel5.png"
                            grid_area="foto-5"
                        />
                    </div>
                    <p>Conheça mais sobre essas e outras histórias incríveis</p>
                    <Button text="Inspire-se!" />
            </FlexContainer>

            <FlexContainer secao="mulheres">
                    <h2>Mulheres em destaque</h2>

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

            {/* <section className="code-break"></section> */}
            <FlexContainer secao="code-break" />

            <FlexContainer secao="tutoriais">
                    <h2>Tutoriais</h2>

                    {/* <!-- SLIDER --> */}
                    {/* <ul className="slider">
                        <li>
                            <input type="radio" id="slide1" name="slide" checked />
                            <label for="slide1"></label>
                            <div className="img-tutorial" style="background-image: url(../img/foto-tutoriais-home.png);"></div>
                        </li>
                        <li>
                            <input type="radio" id="slide2" name="slide" />
                            <label for="slide2"></label>
                            <div className="img-tutorial" style="background-image: url(../img/foto-tutoriais-home2.jpg);"></div>
                        </li>
                        <li>
                            <input type="radio" id="slide3" name="slide" />
                            <label for="slide3"></label>
                            <div className="img-tutorial" style="background-image: url(../img/foto-tutoriais-home3.jpg);"></div>
                        </li>
                    </ul> */}

                    <p>Aprenda com os melhores e o melhor: <strong>de graça!</strong></p>
                    <Button text="Aprenda agora!"/>
            </FlexContainer>

            <Footer />
        </>
    )
}

export default Home