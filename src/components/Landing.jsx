import React, { useState, useEffect } from 'react'
import Img1 from "../assets/IMG_5857.jpg"
import Img2 from "../assets/IMG_5752.jpg"
import Img3 from "../assets/IMG_1655.jpeg"
import Img4 from "../assets/IMG_5936.GIF"

const Landing = () => {
    
const [slideIndex, setSlideIndex] = useState(1);

useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
        plusSlides(1);
    }, 8000);
    return () => clearInterval(interval);
}, [slideIndex]);

const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + n;
        if (newIndex > plusSlides.length) return 1;
        if (newIndex < 1) return plusSlides.length;
        return newIndex;
    });
};

const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}



  return (
    <>
        <header>
            <div className="container">
                    <div className="slideshow__container">
                        <div className="mySlides fade">
                            <img src={Img1} className="slideshow__img" alt="" />
                        </div>
                        <div className="mySlides fade">
                            <img src={Img2} className="slideshow__img" alt="" />
                        </div>
                        <div className="mySlides fade">
                            <img src={Img3} className="slideshow__img" alt="" />
                        </div>
                        <div className="mySlides fade">
                            <img src={Img4} className="slideshow__img" alt="" />
                        </div>
                        <a href="#" className="prev" onclick={plusSlides(-1)}>&#10094;</a>
                        <a href="#" className="next" onclick={plusSlides(1)}>&#10095;</a>
                    </div>
                    <div className="header__description">
                        <h1 className="header__description--title"></h1>
                        <p className="header__description--para"></p>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Landing