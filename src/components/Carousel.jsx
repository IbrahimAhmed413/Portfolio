import React from "react";
import "./Styles/Carousel.css";
import cssicon from "../assets/cssicon.jpg";
import jsicon from "../assets/javascripticon.jpeg";
import muiimage from "../assets/muiimage.png";
import reacticon from "../assets/reacticon.jpg";
import githubimage from "../assets/githubimage.png";
import { TfiNewWindow } from "react-icons/tfi";
const tecimages = [
  { img: cssicon },
  { img: jsicon },
  { img: muiimage },
  { img: reacticon },
];
const Carousel = (props) => {
  return (
    <>
      <div className="mainDiv">
        {props.data.map((item) => (
          <div className="wrapper">
            <div style={{ textAlign: "center" }}>
              <img
                src={item.img}
                alt=""
                width="100%"
                height={{}}
                className="image"
              />
            </div>
            <div className="name">
              {item.name}
              <div>
                {tecimages.map((e) => (
                  <img
                    width={25}
                    height={25}
                    style={{ borderRadius: "16px" }}
                    src={e.img}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="para">
              <p>{item.para}</p>
              <div>
                <TfiNewWindow />
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "12px",
                    marginLeft: "1%",
                  }}
                  href={item.live}
                >
                  Live
                </a>
                <img
                  width={15}
                  style={{ marginLeft: "3%", borderRadius: "16px" }}
                  src={githubimage}
                  alt=""
                />
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "12px",
                    marginLeft: "1%",
                  }}
                  href={item.code}
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Carousel;
