import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Assuming you saved the styles in a file named FAQ.css

export default function Read() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle hover state
  const handleHover = (hovered) => {
    setIsHovered(hovered);
    if (hovered) {
      // Delay resetting the hover state after 5 seconds
      setTimeout(() => {
        setIsHovered(false);
      }, 20000); // 20000 milliseconds = 20 seconds
    }
  };

  useEffect(() => {
    // Check if the screen width is below a certain threshold to determine if it's a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Add event listener for resize

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container-lg-2 space '>
      
      <h1 className="display-3">Quick read</h1>
      <hr/>
      <div className='grid-container'>
        <div className={`content-column ${isMobile && isHovered ? 'typewriter monospace big-caret lorem' : ''}`}
             onMouseEnter={() => !isMobile && handleHover(true)} 
             onTouchStart={() => isMobile && handleHover(true)}> 
          <h6 style={{ fontSize: '20px', top: 0, left: 0, background: 'transparent' }}>
            <strong>Welcome to AdanPradhan</strong>, your one-stop destination
            for accessible and enriching workshops. Our mission is to empower
            students with affordable educational opportunities that propel them
            toward success in their academic and personal endeavors.{' '}
            <strong>At AdanPradhan</strong>, we prioritize affordability,
            employing location-based filtering to reduce travel costs and
            offering a diverse range of workshops spanning technology, arts,
            business, sciences, and more. Additionally, educational institutions
            can partner with us to showcase their workshops, connecting with
            eager learners and contributing to their educational growth.
          </h6>
        </div>

        <div className='img-column'>
          <div className='img-container2'></div>
        </div>
      </div>
    
    </div>
  );
}
