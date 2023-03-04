import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://vestnik.tiu-edu.uz/api/v1/news/")
      .then((reponse) => setNews(reponse.data.results));
  }, []);

  return (
    <div className="news-page">
      {news.length > 0 ? (
        news.map((element, index) => (
          <div className="new-box" key={index}>
            <div className="news-data">
              <p>{element.created}</p>
            </div>
            <h2>{element.translations.ru.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: element.translations.ru.description,
              }}
            />
          </div>
        ))
      ) : (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default News;
