import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles including font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
`;

// Container styled component using CSS Grid
const ContainerBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  max-width: 1320px;
  margin: 0 auto;
  

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Main image styled component
const MainImg = styled.img`
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px 7px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Text block styled component
const TextBlock = styled.div`
  padding: 10px;
  line-height: 1.5;
  &.headingText {
    font-size: 25px;
    font-weight: 700;
    color: rgb(51, 51, 51);
    margin-bottom: 10px;
  }

  &.subHeadingText {
    color: black;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    max-height: ${({ expanded }) => (expanded ? '100%' : '192px')}; /* Adjusted max-height */
    transition: max-height 0.5s ease;
    
  }

  &.showMoreLess {
    cursor: pointer;
    color: #007bff;
    display: none; /* Initially hide on larger screens */
  }

  @media (max-width: 868px) {
    &.showMoreLess {
      display: block; /* Display on smaller screens */
    }
    &.subHeadingText{
      font-size:15px;
    }
  }
`;

// Example component using the styled components with CSS Grid
const About = () => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setExpanded(true); // Close on larger screens
      }else{
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <GlobalStyle />
      <ContainerBlock>
        <div>
          <MainImg src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
        </div>
        <div>
          <TextBlock className="headingText">Our Mission</TextBlock>
          <TextBlock className="subHeadingText" expanded={expanded}>
            <b>At Adan-Pradhan,</b> we strive to democratize educational workshop access by offering affordable options, empowering students to navigate their academic journey. Through strategic partnerships, we curate diverse workshops, ensuring inclusivity and catering to varied interests. Our commitment extends beyond affordability, providing resources for informed decision-making. By removing financial barriers and equipping students, we aim to level the educational playing field. Together, we unlock every student's potential, fostering empowered learners and future leaders. Join us in our mission for accessible quality education, shaping a brighter future for all.
            </TextBlock>
            <TextBlock
              className="showMoreLess"
              onClick={handleToggle}
            >
              {expanded ? 'Show less' : 'Show more'}
            </TextBlock>
          
        </div>
      </ContainerBlock>
      <ContainerBlock>
        <div>
          <TextBlock className="headingText">Our Vision</TextBlock>
          <TextBlock className="subHeadingText" expanded={expanded}><b>At Adan-Pradhan,</b> we envision a world where every student has access to quality education, regardless of financial or social barriers. We aim to create a community where learning opportunities are readily available, empowering all students to reach their fullest potential. Through strategic partnerships and innovative programs, we strive to make education more inclusive and transformative. Our ultimate goal is to foster a generation of empowered learners who will shape a brighter, more equitable future for all. Join us as we work toward a world where education is the key to opportunity and success, available to everyone.</TextBlock>
          <TextBlock
              className="showMoreLess"
              onClick={handleToggle}
            >
              {expanded ? 'Show less' : 'Show more'}
            </TextBlock>
          
          
        </div>
        <div>
          <MainImg src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" />
        </div>
      </ContainerBlock>
    </>
  );
};

export default About;
