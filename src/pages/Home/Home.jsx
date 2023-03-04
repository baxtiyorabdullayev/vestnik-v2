import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import "./Home.css";

// react icons
import { RiArrowRightDownLine } from "react-icons/ri";

// images
import magazine from "../../assets/Images/magazine.jpg";
import editor from "../../assets/Images/editor.jpg";

function Home() {
  const [editorChief, setEditorChief] = useState([]);

  useEffect(() => {
    axios
      .get("https://vestnik.tiu-edu.uz/api/v1/chief_editor/")
      .then((response) => setEditorChief(response.data.results[0]));
  }, []);

  return (
    <div id="home-page">
      <div className="magazine-info-section">
        <img src={magazine} alt="Turan" />
        <div className="info-text">
          <div className="info-title">
            <span>О ЖУРНАЛЕ</span>
            <RiArrowRightDownLine></RiArrowRightDownLine>
          </div>
          <p className="info-description">
            «Вестник университета «Туран» - научный журнал, публикующий научные
            статьи по широкому спектру современных экономических проблем,
            вопросам развития сферы образования, туризма, проблемам обеспечения
            устойчивого развития республики, повышения качества образования.
            Редакционная коллегия, рецензенты и авторы журнала стремятся
            соблюдать высокие стандарты научной и публикационной этики:
            прозрачность взаимодействия редакции и авторов журнала, обязательное
            рецензирование всех поступающих в журнал статей независимыми
            экспертами или членами редакционной коллегии, свободный доступ к
            публикациям. Журнал «Вестник университета «Туран»:
          </p>
        </div>
      </div>
      <div className="editor-info-section">
        <img
          src={editorChief?.image}
          alt="Нурмуханова Гульнара Жагыпаровна"
          style={{ width: "160px", height: "215px" }}
        />
        <div className="info-text">
          <div className="info-title">
            <span>ГЛАВНЫЙ РЕДАКТОР</span>
            <RiArrowRightDownLine></RiArrowRightDownLine>
          </div>
          <h5>{editorChief?.translations?.ru?.name}</h5>
          <div
            className="info-description"
            dangerouslySetInnerHTML={{
              __html: editorChief?.translations?.ru?.description,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
