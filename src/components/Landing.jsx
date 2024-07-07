import React, { useState, useEffect } from "react";
import "./Landing.css";
import landing from "../assests/landing.png";

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      content:
        "Where to grow your business as a photographer: site or social media?",
      image: "images/Illustration.png",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      content:
        "Where to grow your business as a photographer: site or social media?",
      image: "images/Illustration.png",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      content:
        "Where to grow your business as a photographer: site or social media?",
      image: "images/Illustration.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <section className="carousel">
        <div className="carousel-slide">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="carousel-content">
                <h1>
                  {slide.title} <br />
                  <span>{slide.subtitle}</span>
                </h1>
                <p>{slide.content}</p>
                <button className="register-button hover:bg-green-700">
                  Register
                </button>
              </div>
              <div className="carousel-image">
                <img src={landing} alt="Carousel Image" />
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Landing;
