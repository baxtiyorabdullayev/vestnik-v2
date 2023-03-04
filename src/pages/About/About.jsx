import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import Accordion from "react-bootstrap/Accordion";

import { RiArrowRightDownLine } from "react-icons/ri";

function About() {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://vestnik.tiu-edu.uz/api/v1/about/")
      .then((response) => setAboutInfo(response.data.results));
  }, []);

  return (
    <div className="about-page">
      {aboutInfo.length > 0 ? (
        aboutInfo.map((element, index) => (
          <div key={index + 12}>
            <h2 className="mb-2 mt-4 about-headings">
              {element.translations.ru.title}
              <RiArrowRightDownLine></RiArrowRightDownLine>
            </h2>
            {element.related_about.map((element, index) => (
              <Accordion key={index}>
                <Accordion.Item eventKey="0" className="mb-2">
                  <Accordion.Header>
                    {element.translations.ru.header}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: element.translations.ru.description,
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
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

export default About;
