import css from '../assets/css/nps.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Avaliacao from '../components/Avaliacao';
import InputNps from "../components/InputNps";
import TituloNps from '../components/TituloNps';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Nps() {
    const [name, setName] = useState(''); // valor padrao, string vazia
    const [email, setEmail] = useState('');
    const [util, setUtil] = useState(undefined); //undefined, não clicado
    const [facil, setFacil] = useState(undefined);
    const [recomenda, setRecomenda] = useState(undefined);
    const history = useHistory();

    function sendData() {
      fetch("http://localhost:5000/posts", {
        method: "POST",
        body: JSON.stringify({
          nome: name,
          email: email,
          notaRecomenda: recomenda,
          notaUtil: util,
          notaFacil: facil,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }


    // VALIDACAO EMAIL E NOME
    const validacaoEmailNome = (event) => {
        event.preventDefault()
        const nomeInput = document.querySelector('#nome')
        const emailInput = document.querySelector('#email')
        const idUtil = document.querySelector('#util')
        const erro = document.createElement('p')
        erro.classList.add('deuRuim')
        const deuRuimAll = document.querySelectorAll('.deuRuim')

        if (deuRuimAll) {
            deuRuimAll.forEach(deuRuim => {
                deuRuim.innerHTML = ''
            })
        }

        if (name.length < 2) {
            let msg = document.createTextNode('Preencha um nome válido')
            erro.appendChild(msg);
            nomeInput.innerHTML = ''
            nomeInput.insertAdjacentElement("afterend", erro);
        }
        else if (email.length < 10 || email.length > 180 || !email.includes('.') || !email.includes('@')) {
            let msg = document.createTextNode('Preencha o email de forma correta, < 10, > 180, incluindo . e @')
            erro.appendChild(msg);
            emailInput.innerHTML='';
            emailInput.insertAdjacentElement("afterend", erro);
        }
        else if (!recomenda || !facil || !util) {
            let msg = document.createTextNode('Marque uma nota para cada uma das perguntas')
            erro.appendChild(msg);
            idUtil.insertAdjacentElement("afterend", erro);
        }
        else {
            let tagp = document.querySelector('#form p');
            tagp.innerHTML='';
            sendData();
            history.push("/npsEnviado")
        }
    }


    return (
        <div>
            <Header />
            <TituloNps />
            

            
            <section  className={css.containerForm}>
                    <form id="form" onSubmit={validacaoEmailNome}>

                        <InputNps nome="Nome *:" id="nome" placeholder="Digite seu nome aqui" type="text" value={name} setValue={setName}/>
                        <InputNps nome="Email *:" id="email" placeholder="Digite seu email aqui" type="text" value={email} setValue={setEmail}/>

                        <div className={css.avaliacao}>
                            <Avaliacao util={setUtil} facil={setFacil} recomenda={setRecomenda}/>
                        </div>

                        <section  className={css.enviar}>
                            <button type="submit"  className={css.botaoenviar}>Enviar</button> 
                        </section>

                    </form>
            </section>
    
            <Footer />
        </div>
    );
}

export default Nps;