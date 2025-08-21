import React from "react";
import "./Styles/Project.css";
const ProjectScreen = (props) => {
  return (
    <>
      <div className="firstdiv">
        <div className="project-main-div">
          <h1>{props.h1}</h1>
          <h1 className="gradient-color">{props.dh1}</h1>
        </div>
        <div className="writing-div">
          {props.div}
        </div>
      </div>
    </>
  );
};
export default ProjectScreen;
