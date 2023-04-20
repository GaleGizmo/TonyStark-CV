import React from "react";
import "./About.css"

const About = ({ hero }) => {
  return (
    <div className="card about">
    <h2>About Me</h2>
      {hero.map((item) => {
        return (
          <div className="item" key={JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
