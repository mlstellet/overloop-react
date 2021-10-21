import React, { useState } from "react";
import CardTutoriais from "./CardsTutoriais";
import Pagination from "./Pagination";
import data from '../data.json'

export default function QuadroTutoriais() {
    const [atualPage, setAtualPage] = useState(1);
    const [postPerPage] = useState(3);

    // Pegando o post atual
    const indexUltimoPost = atualPage * postPerPage;
    const indexPrimeiroPost = indexUltimoPost - postPerPage;
    const tutAtuais = data.slice(indexPrimeiroPost, indexUltimoPost)

    // mudando de pagina
    const paginate = (pageNumber) => {
        setAtualPage(pageNumber);
    }

    return (
        <>
            <CardTutoriais data={tutAtuais}/>
            <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={paginate} />
        </>
    )
}