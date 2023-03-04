import React, { useState, useEffect } from "react";
import "./News.css";

const [news, setNews] = useState([]);

function News() {
  return (
    <div className="news-page">
      <div className="news1">
        <div className="news-data">
          <p>2023-02-15</p>
        </div>
        <h4 className="news-title">
          Мақалаларды 2023 жылғы №1(97) журналға қабылдау аяқталды. Прием статей
          в № 1(97) 2023 г. окончен. Articles for No. 1(97) 2023 are no longer
          accepted.
        </h4>
        <div className="news-text">
          <p>
            Құрметті авторлар, мақалаларды 2023 жылғы №1(97) журналға қабылдау
            аяқталды. 2023 жылғы № 2(98) журналға материалдарды қабылдау туралы
            хабарландыру журнал сайтындағы "Жаңалықтар" бөлімінде жарияланады.
            Белгіленген мерзімнен тыс жіберілген мақалалар қабылданбайтынын
            хабарлаймыз.
          </p>
          <p>
            Уважаемые авторы, прием статей в № 1(97) 2023 г. окончен. О приеме
            материалов для № 2(98) 2023 г. будет опубликовано объявление в
            разделе «Новости» на сайте журнала. Уведомляем, что отправленные вне
            назначенного срока статьи будут отклонены.
          </p>
          <p>
            Dear authors, Articles for No. 1(97) 2023 are no longer accepted. An
            announcement will be published in the "News" section of the
            journal's website about the acceptance of materials for No. 2(98)
            2023. We would like to notify you that articles that do not meet
            deadlines will be rejected.
          </p>
        </div>
      </div>
      <div className="news1">
        <div className="news-data">
          <p>2023-02-15</p>
        </div>
        <h4 className="news-title">
          Мақалаларды 2023 жылғы №1(97) журналға қабылдау аяқталды. Прием статей
          в № 1(97) 2023 г. окончен. Articles for No. 1(97) 2023 are no longer
          accepted.
        </h4>
        <div className="news-text">
          <p>
            Құрметті авторлар, мақалаларды 2023 жылғы №1(97) журналға қабылдау
            аяқталды. 2023 жылғы № 2(98) журналға материалдарды қабылдау туралы
            хабарландыру журнал сайтындағы "Жаңалықтар" бөлімінде жарияланады.
            Белгіленген мерзімнен тыс жіберілген мақалалар қабылданбайтынын
            хабарлаймыз.
          </p>
          <p>
            Уважаемые авторы, прием статей в № 1(97) 2023 г. окончен. О приеме
            материалов для № 2(98) 2023 г. будет опубликовано объявление в
            разделе «Новости» на сайте журнала. Уведомляем, что отправленные вне
            назначенного срока статьи будут отклонены.
          </p>
          <p>
            Dear authors, Articles for No. 1(97) 2023 are no longer accepted. An
            announcement will be published in the "News" section of the
            journal's website about the acceptance of materials for No. 2(98)
            2023. We would like to notify you that articles that do not meet
            deadlines will be rejected.
          </p>
        </div>
      </div>
      <div className="news1">
        <div className="news-data">
          <p>2023-02-15</p>
        </div>
        <h4 className="news-title">
          Мақалаларды 2023 жылғы №1(97) журналға қабылдау аяқталды. Прием статей
          в № 1(97) 2023 г. окончен. Articles for No. 1(97) 2023 are no longer
          accepted.
        </h4>
        <div className="news-text">
          <p>
            Құрметті авторлар, мақалаларды 2023 жылғы №1(97) журналға қабылдау
            аяқталды. 2023 жылғы № 2(98) журналға материалдарды қабылдау туралы
            хабарландыру журнал сайтындағы "Жаңалықтар" бөлімінде жарияланады.
            Белгіленген мерзімнен тыс жіберілген мақалалар қабылданбайтынын
            хабарлаймыз.
          </p>
          <p>
            Уважаемые авторы, прием статей в № 1(97) 2023 г. окончен. О приеме
            материалов для № 2(98) 2023 г. будет опубликовано объявление в
            разделе «Новости» на сайте журнала. Уведомляем, что отправленные вне
            назначенного срока статьи будут отклонены.
          </p>
          <p>
            Dear authors, Articles for No. 1(97) 2023 are no longer accepted. An
            announcement will be published in the "News" section of the
            journal's website about the acceptance of materials for No. 2(98)
            2023. We would like to notify you that articles that do not meet
            deadlines will be rejected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
