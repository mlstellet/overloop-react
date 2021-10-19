import css from '../assets/css/cardVagas.module.css'
import React, { useEffect, useState } from "react";
import api from "./vagas";

export default function App() {
    const api_key = "e03cb2fc-44fa-493f-b3f0-582fb8f39288";
    const [user, setUser] = useState([]);
    const [data, setData] = useState({ keywords: 'it' });
    const [show, setShow] = useState(false)
    useEffect(() => {
        api
          .post("/api/"+api_key, data)
          .then((response) => setUser(response.data.jobs))
          .then(() => setShow(true))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <>
        {show && (
            <>
            {user.map(single=>(
            <section className={css.content}>
            <article className={css.job}>
                <div className={css.job_info}>
                    <div className={css.text}>
                        <a href={single.link} target='_blank'><h2 className={css.tipo}>{single.title}</h2></a>
                    <p className={css.descricao} dangerouslySetInnerHTML={{__html: single.snippet}} /> 
                    <span className={css.location}>{single.location}</span>
                    </div>
                </div>
            </article>
            </section>
        ))}
            </>
        )}
        </>
    )
}

