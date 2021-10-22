import React, { useState, useEffect } from "react";
import css from "../assets/css/inspiracoes.module.css";
import axios from "axios";

// headline, standfirst, body
const api_key = process.env.react_app_guardiankey;

const api = axios.create({
    baseURL: `https://content.guardianapis.com/search?section=technology&q=technology&api-key=${api_key}&show-fields=thumbnail,trailText,starRating`,
});

function getNews(newsList = []) {
    return newsList.map((noticia) => {
        const { webTitle, webUrl, webPublicationDate, fields } = noticia;
        return (
            <div className={css.container} key={webUrl}>
                <div className={css.image}>
                    <img src={fields.thumbnail} alt="noticia1" />
                </div>
                <div className={css.info}>
                    <div className={css.text}>
                        <h3>{webTitle}</h3>
                        <small>
                            {webPublicationDate.slice(0, 10).split("-").reverse().join("-")}
                        </small>
                    </div>
                    <p>{fields.trailText}</p>
                    <p>
                        Saiba mais em{" "}
                        <a href={webUrl} target="_blank" rel="noreferrer">
                            {" "}
                            link
                        </a>
                    </p>
                </div>
            </div>
        );
    });
}

function Noticias(props) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        api
            .get()
            .then(({ data }) => {
                setNews(data.response.results.slice(0, 3));
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            {
                getNews(news)
            }
        </>
    );
}

export default Noticias;
