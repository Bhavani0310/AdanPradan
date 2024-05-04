import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Read from "./Read";
import Slider from "./Slider";
import Footer from "./Footer";
import Faq from "./Faq";
import About from "./About";
import { Link } from "react-router-dom";
import Navbar_home from "./Navbar_home";
const CarouselWrapper = styled.div`
  height: 100vh;
`;

const CarouselInner = styled.div`
  height: 100%;
`;

// const HeroText = styled.div`
//   z-index: 1;
//   color:black;
//   text-align: center;
//   transition: transform 0.5s ease;
//   transform: translateY(${props => props.scrollDirection === 'up' ? '-100%' : '0'});
// `;
// const Heading = styled.h1`
//   font-family: "Roboto Condensed", sans-serif;
//   font-style: normal;
//   font-size: 3.3rem;
//   margin-bottom: 59px;
//   color:rgb(213, 213, 152);
//   transition: opacity 0.5s ease;
//   opacity: ${props => props.scrollDirection === 'up' ? '0' : '1'};

//   @media (max-width: 884px) {
//     font-size: 2.8rem;
//     color:white
//   }
// `;

// const Paragraph = styled.p`
//   font-size: 1.4rem;
//   margin-bottom: 52px;
//   // transition: opacity 0.5s ease;
//   // opacity: ${props => props.scrollDirection === 'up' ? '0' : '1'};
//   color:black
//   @media (max-width: 868px) {
//     font-size: 1rem;
//     color:white;
//     overflow:hidden;
//     display:none;
//   }
// `;

const Button = styled.button`
  border-radius: 4px;

  border: none;
  background-color: #e2e273;
  color: #000000;
  font-weight: 800;
  font-size: 0.85em;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0em -0.2rem 0em #e2e273 inset;
  transition: color 3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: white;
    border: 3px solid #e2e273;
    cursor: pointer;
  }
  @media (max-width: 884px) {
    font-size: 1.8rem;
    color: black;
  }
`;
const CarouselItem = styled.div`
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  min-height: calc(115vh - 86px);
  display: flex;
  align-items: end;
  justify-content: center;
`;

const Mask = styled.div`
  background-color: rgba(0, 0, 0, ${(props) => props.opacity});
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContent = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-size: 3rem;
  margin-bottom: 59px;
  color: rgb(213, 213, 152);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  text-align: center;
  color: ${(props) => props.textColor || "white"};
  @media (max-width: 884px) {
    font-size: 1.8rem;
    // color:white
  }
`;

const HeroSection = () => {
  // const [scrollDirection, setScrollDirection] = useState('down');
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 15000); // Move to next item every 1 minute (60000 milliseconds)

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    console.log(activeIndex);
    console.log("perv");
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    console.log("next");
    console.log(activeIndex);
  };

  return (
    <>
      <Navbar_home scrollToSection={"transparent"}/>
      
      <CarouselWrapper
        className="carousel slide carousel-fade shadow-2-strong"
        data-mdb-carousel-init
      >
        <div className="carousel-indicators">
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to="0"
            className={activeIndex === 0 ? "active" : ""}
          ></li>
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
          ></li>
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
          ></li>
        </div>
        <CarouselInner className="carousel-inner">
          <CarouselItem
            className={
              activeIndex === 1 ? "carousel-item active" : "carousel-item"
            }
            imageUrl="../images/Hero-2.jpg"
            isActive={activeIndex === 1}
          >
            <Mask opacity="0.8">
              <ContentWrapper>
                <TextContent>
                  <b>Innovative Assembly: Crafting Tech Visionaries</b>
                </TextContent>
              </ContentWrapper>
            </Mask>
          </CarouselItem>
          <CarouselItem
            className={
              activeIndex === 2 ? "carousel-item active" : "carousel-item"
            }
            imageUrl="../images/Hero-5.jpg"
            isActive={activeIndex === 2}
          >
            <Mask opacity="0.8">
              <ContentWrapper>
                <TextContent textColor="white">
                  <b>Tech Fusion: Diverse Workshops in Focus</b>
                  <br/>

                </TextContent>
              </ContentWrapper>
            </Mask>
          </CarouselItem>
          <CarouselItem
            className={
              activeIndex === 0 ? "carousel-item active" : "carousel-item"
            }
            imageUrl="../images/Hero-1.jpg"
            isActive={activeIndex === 0}
          >
            <Mask opacity="0.7">
              <ContentWrapper>
                <TextContent textColor="rgb(213, 213, 152)">
                  <b>Elevate your Mind, Elevate your Future </b>

                  <br />
                  <Link to="/Register">
                    <Button
                      href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
                      className="btn btn-outline-light btn-lg m-2"
                      data-mdb-ripple-init
                      role="button"
                    >
                     <b> Book Your Workshop</b>
                    </Button>
                  </Link>
                </TextContent>
              </ContentWrapper>
            </Mask>
          </CarouselItem>
        </CarouselInner>
        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-mdb-slide="prev"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-mdb-slide="next"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </CarouselWrapper>

      {/* <Read/> */}

      <About />
      <Faq />
      <Slider />

      <Footer />
    </>
  );
};

export default HeroSection;
