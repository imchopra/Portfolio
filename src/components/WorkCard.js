import "./WorkCardStyles.css";
import React from 'react';


const WorkCard = (props) => {
  return (
 
    <div className="project-card">
      <img src={`images/${props.projectimage}`} alt="My project Image data"/>
      <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
              <div className="pro-btns">
                <a href={props.view} target="_blank" className="btn">View</a>
              </div>
          </div>
      </div>
     
  )
}

export default WorkCard
