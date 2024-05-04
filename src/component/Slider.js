import React from 'react';
import styled, { keyframes }  from 'styled-components';

const fadeInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CollegeLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CollegeCard = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  animation: ${fadeInUp} 1.0s ease forwards; /* Apply the animation */
  animation-delay: ${(props) => props.animationDelay}; /* Add animation delay */
`;

const Logo = styled.img`
  width: 150px; /* Adjust the width of the logo as needed */
`;



const colleges = [
  {
    logoSrc: '../images/kmit.png'
  },
  {
    logoSrc: '../images/ngit.png'
  }, 
  {
    logoSrc: '../images/kmec.png'
  },
];

const Colleges = () => {
  return (<>
 <h1><center>Our Partners</center></h1>
  <CollegeLogoContainer>
    
      {colleges.map((college, index) => (
        <CollegeCard key={index}>
          <Logo src={college.logoSrc}/>
        </CollegeCard>
      ))}
    </CollegeLogoContainer>
  </>
    
  );
};

export default Colleges;
