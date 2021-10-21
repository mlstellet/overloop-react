function InputNps() {
    return (
        <div>
            <label for="nome">Nome*:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui" required />

            <label for="email">Email*:</label>
            <input type="email" name="email" id="email" placeholder="Digite seu email aqui" required />
        </div>
    );
}

export default InputNps;