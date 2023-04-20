import { useState } from "react";
import "./App.css";

import { CV } from "./CV/cv";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import About from "./components/About";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [ShowExp, setShowExp] = useState(false);
  const [ShowLang, setShowLang] = useState(false);
  const [ShowHab, setShowHab] = useState(false);
  const [ShowVol, setShowVol] = useState(false);
  const [ShowEdu, setShowEdu] = useState(false);

  return (
    <div className="App">
      <div className="CV-item">
        <button
          className="custom-btn"
          onClick={() => {
            ShowExp ? setShowExp(false) : setShowExp(true);
          }}
        >
          Experience
        </button>
        {ShowExp ? <Experience experience={experience} /> : ""}
      </div>
      <div className="CV-personal">
        <Hero hero={hero} />
        <About hero={hero.aboutMe} />
        <div className="CV-more">
          <div className="CV-more buttons">
            <button
              className="custom-btn__small"
              onClick={() => {
                ShowLang ? setShowLang(false) : (setShowLang(true),setShowHab(false),setShowVol(false));
              }}
            >
              Languages
            </button>
            <button
              className="custom-btn__small"
              onClick={() => {
                ShowHab ? setShowHab(false) : (setShowHab(true),setShowLang(false),setShowVol(false));
              }}
            >
              Habilities
            </button>
            <button
              className="custom-btn__small"
              onClick={() => {
                ShowVol ? setShowVol(false) : (setShowVol(true),setShowHab(false),setShowLang(false));
              }}
            >
              Volunteer
            </button>
          </div>
          {ShowLang ? <More languages={languages} /> : ""}
          {ShowHab ? <More habilities={habilities} /> : ""}
          {ShowVol ? <More volunteer={volunteer} /> : ""}
        </div>
      </div>
      <div className="CV-item">
        <button
          className="custom-btn"
          onClick={() => {
            ShowEdu ? setShowEdu(false) : setShowEdu(true);
          }}
        >
          Education
        </button>
        {ShowEdu ? <Education education={education} /> : ""}
      </div>
    </div>
  );
}

export default App;
