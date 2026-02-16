import React, { useState, useEffect } from "react";
import Img1 from "../assets/IMG_5857.jpg";
import Img2 from "../assets/IMG_5752.jpg";
import Img3 from "../assets/IMG_1655.jpeg";
import Img4 from "../assets/IMG_5936.GIF";

const images = [Img1, Img2, Img3, Img4];

const Home = () => {
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
  }, []);
  return (
    <>
      <header>
        <div className="container">
          <div className="slideshow__container">
            {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`slideshow__img ${index === slideIndex ? "active" : ""}`}
                  alt=""
                />
            ))}
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
      <section>
        <div className="container">
            <div className="row">
                <div className="why__choose--container">
                    <h1>Why Choose <span className="purple">Heavenly Açaí?</span></h1>
                    <p>
                        Because food should make you feel good. Our açaí bowls are <span className="purple">fresh, vibrant, and satisfying.</span> They're perfect for a quick breakfast, post-workout boost, or guilt-free dessert.
                    </p>
                    <ul>
                        <li>Naturally Energizing - Light, refreshing fuel without the heavy crash</li>
                        <li>Antioxidant Rich - Packed with nutrients that support overall wellness</li>
                        <li>Gluten-Free Friendly - Options that fit a variety of lifestyles</li>
                        <li>Fresh & Delicious - Real fruit, bold flavor, and made with care</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;