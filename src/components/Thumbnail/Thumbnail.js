import React from "react"
import "./style.css"
const Thumbnail = (props) => {
    return (
<div className="project">
    
<div className="project-image">
    <img src={props.image} alt="Project" className="proimg"/>
</div>
<div className="project-title">{props.title}</div>
<div className="project-description">{props.description}</div>
<a href={props.github} target="_blank" rel="noreferrer"> <div className="github-repo">Link to the Github Repo</div> </a> 
</div>
)



}

export default Thumbnail