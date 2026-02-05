import React, { useState, useEffect } from "react";
import Img1 from "../assets/IMG_5857.jpg";
import Img2 from "../assets/IMG_5752.jpg";
import Img3 from "../assets/IMG_1655.jpeg";
import Img4 from "../assets/IMG_5936.GIF";

const images = [Img1, Img2, Img3, Img4];

const Landing = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <header>
        <div className="container">
          <div className="slideshow__container">
            <img
              src={images[slideIndex]}
              className="slideshow__img fade"
              alt=""
            />
          </div>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="header__description">
            <h1 className="header__description--title"></h1>
            <p className="header__description--para"></p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Landing;
