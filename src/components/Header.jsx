import React from "react";
import "./Styles/Header.css";
import links from "../data/data";
import ibi from "../assets/ibi.jpeg";
// import "../../public/Ibrahim Ahmed_front-end-dev.pdf"
const Header = () => {
  function onclick(){
    const link = document.createElement("a")
    link.href = "/IbrahimAhmed's_resume.pdf"
    link.download = "IbrahimAhmed's_resume"
    link.click()
  }
  return (
    <>
      <div className="Header-main-div">
        <div className="links-div">
            <img className="links-div-button-name" alt="IA" src={ibi} />
          {links.map((e) => (
            <a href={e.path}>{e.name}</a>
          ))}
          <div className="links-div-button">
            <button className="links-div-button-resume" onClick={onclick}>Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
