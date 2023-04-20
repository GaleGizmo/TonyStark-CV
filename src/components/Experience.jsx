import React from 'react'
import "./Experience.css"

const Experience = ({experience}) => {
  return (
    <div>
        <div className="card margintop ">
          {experience.map((item) => {
            return (
              <div className="experience " key={JSON.stringify(item)}>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p className="experience ">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Experience
