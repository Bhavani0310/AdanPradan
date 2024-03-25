import React, { useEffect, useState } from 'react';
import './FAQ.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [delayAnimation, setDelayAnimation] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayAnimation(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-rho-one.vercel.app/Adan/faqs'); 
        // Select 4 random FAQs
        const randomFaqs = shuffleArray(response.data).slice(0, 4);
        setFaqs(randomFaqs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container-lg-1 space">
      
{loading ? (
            // <div>
            //   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            //   <span role="status"></span>
            // </div>
            <div className="loader-container">
            <div className="loader"></div>
          </div>
          ) : (
      <div className='grid-container'>
        <div className='img-column-1'>
          <div className={`img-container1 ${delayAnimation ? 'animate' : ''}`} ></div>
        </div>
        <div className='content-column-1'>
          <div className="faq">
            <Link to="/faq">
              <h2 className="col-5 h faq">FAQ</h2>
            </Link>
            <div className="faqs">
              {faqs.map((faq, index) => (
                <div
                  className={"faq " + (faq.open ? "open" : "")}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">{faq.question}</div>
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       )}
    </div>
  );
};

export default Faq;
