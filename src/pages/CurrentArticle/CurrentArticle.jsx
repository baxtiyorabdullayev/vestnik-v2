import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentArticle.css";
import pdf from "../../assets/Images/JavaScript.pdf";

function CurrentArticle() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("https://vestnik.tiu-edu.uz/api/v1/articles/")
      .then((response) => setArticle(response.data.results));
    console.log(article);
  }, []);
  return (
    <div className="current-article-page">
      {article.map((element, index) => (
        <iframe src={pdf} key={index} className="pdf-view"></iframe>
      ))}
    </div>
  );
}

export default CurrentArticle;
