import React, { useState, useEffect } from "react";
import css from "../assets/css/inspiracoes.module.css";
import axios from "axios";


// headline, standfirst, body
const api_key = "fc31a41c-6d41-4cd3-b1ce-de28a1889f8a";

const api = axios.create({
  baseURL: `https://content.guardianapis.com/search?section=technology&q=technology&api-key=${api_key}&show-fields=thumbnail,trailText,starRating`,

  
});

function getNews(newsList) {
  var news = [];

  newsList.forEach((noticias) => {
    const { webTitle, webUrl, webPublicationDate, fields } = noticias;
    news.push(
      <>
      <div className={css.container} >
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
    </>
    );
  });

  return news;
}

function Noticias(props) {

  const [news, setNews] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    api
    .get()
    .then((response) => setNews(response.results.slice(0, 3)))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  });
  return news;
}
// setNews(getNews(response.data.results.slice(0, 3))
export default Noticias;
