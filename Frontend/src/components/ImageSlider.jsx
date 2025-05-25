import React from "react";
import "react-slideshow-image/dist/styles.css";

// const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "100vh",
  transform: "scale(0.78)", // Zoom out the images by 10%
  transition: "transform 0.5s ease-in-out", // Smooth transition for zoom effect
};
const slideImages = [
  {
    url: "/6308.png",
  },
  {
    url: "/7566.png",
  },
  {
    url: "/8294.png",
  },
];

const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
