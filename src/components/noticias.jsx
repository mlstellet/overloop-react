import React, { useState } from "react";
import css from "../assets/css/inspiracoes.module.css";

const api_key = "b600c122-75d0-4c03-bcd2-684c5f16eb3e";

const URL = `https://content.guardianapis.com/search?section=technology&q=technology&api-key=${api_key}&show-fields=thumbnail,trailText,starRating`;
// headline, standfirst, body

function getNews(newsList) {
  var news = [];

  newsList.forEach((noticias) => {
    const { webTitle, webUrl, webPublicationDate, fields } = noticias;
    news.push(
      <>
      
      <div className={css.container}>
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
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setNews(getNews(data.response.results.slice(0, 3))));

  return news;
}

export default Noticias;
