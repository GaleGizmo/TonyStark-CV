import React from "react";
import "./More.css"

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="card margintop">
      {languages ? (
        <div className="more">
          <h3>Language: {languages.language}</h3>
          <p>Written level: {languages.wrlevel}</p>
          <p>Spoken level: {languages.splevel}</p>
        </div>
      ) : (
        ""
      )}
      {habilities ? (
        <div className="more">
          {habilities.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      ) : (
        ""
      )}
      {volunteer?(
        <div >
        {volunteer.map((item)=>{
          return (
            <div className="more" key={JSON.stringify(item)}>
              <h3>{item.name}</h3>
              <p>🗺️{item.where}</p>
              <p>{item.description}</p>
            </div>
            
          )
        })}
        </div>
      ):('')}
    </div>
  );
};

export default More;
