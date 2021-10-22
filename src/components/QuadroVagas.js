import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card_Vagas from "./Card_Vagas";
import Pagination from "./Pagination";
import VagasPainel from "./VagasPainel";
import { BuscaContext } from "../context/busca.context"

// pq axios.create? e não axios.get?
const api = axios.create({
    baseURL: "https://jooble.org/",
    
});

export default function QuadroVagas() {
    const api_key = "e03cb2fc-44fa-493f-b3f0-582fb8f39288";
    const [vagas, setVagas] = useState([]);
    const { keyword } = useContext(BuscaContext);
    const [loading, setLoading] = useState(false);
    const [atualPage, setAtualPage] = useState(1);
    const [postPerPage] = useState(9);

    // fazendo a requisição quando o componente Mount
    // e só se construirá quando Mount -> []
    useEffect(() => {

        setLoading(true)
        api
          .post("/api/" + api_key, keyword)
          .then((response) => setVagas(response.data.jobs))
          .then(() => setLoading(false))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, [keyword]);

    // Pegando o post atual
    const indexUltimoPost = atualPage * postPerPage;
    const indexPrimeiroPost = indexUltimoPost - postPerPage;
    const vagasAtuais = vagas.slice(indexPrimeiroPost, indexUltimoPost)

    // mudando de pagina
    const paginate = (pageNumber) => setAtualPage(pageNumber);

    return (
        <>
            <VagasPainel>
                <Card_Vagas vagas={vagasAtuais} loading={loading}/>
            </VagasPainel>
            <Pagination postPerPage={postPerPage} totalPosts={vagas.length} paginate={paginate} />  
        </>
    )
}