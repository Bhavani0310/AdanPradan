import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./StyleUser.css";
import Footer from "./Footer";
import Faq from "./Faq";


export default function UserStudent() {

  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "https://backend-rho-one.vercel.app/Adan/workshops"; // Replace with your actual API endpoint

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Get the current date in IST
        const currentDateIST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        console.log(currentDateIST);
        // Filter and select only future workshops
        const futureWorkshops = data.filter((workshop) => {
          const workshopDate = new Date(workshop.workshopDate);
          return workshopDate >= new Date(currentDateIST);
        });
        console.log(futureWorkshops);
        // Shuffle the future workshops
        const shuffledData = shuffleArray(futureWorkshops);

        // Select unique titles and ensure at least three cards
        const uniqueTitles = new Set();
        const selectedWorkshops = [];
        for (const workshop of shuffledData) {
          if (!uniqueTitles.has(workshop.workshopTitle)) {
            uniqueTitles.add(workshop.workshopTitle);
            selectedWorkshops.push(workshop);

            if (selectedWorkshops.length >= 3) {
              break; // Ensure at least three cards
            }
          }
        }
         
        // If there are fewer than three unique titles, repeat the titles to reach three cards
        while (selectedWorkshops.length < 3 && shuffledData.length > 0) {
          const randomIndex = Math.floor(Math.random() * shuffledData.length);
          const randomWorkshop = shuffledData.splice(randomIndex, 1)[0];
          selectedWorkshops.push(randomWorkshop);
        }

        setWorkshops(selectedWorkshops);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  return (
    <div>
      <div className="container center space" style={{ height: "200px" }}>
        <div className="display-1 center" id="font">
          Book Your WorkShop
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
        {workshops.map((workshop, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <center>
                  <h1>{workshop.workshopTitle}</h1>
                </center>
                <div className="card-body">
                  <h4 className="card-title"><b>CollegeName:</b> {workshop.collegeName}</h4>
                  <p className="card-text">{workshop.workshopDescription}</p>
                  <Link
                          to={`/booking?collegeName=${encodeURIComponent(
                            workshop.collegeName
                          )}&workshopTitle=${encodeURIComponent(
                            workshop.workshopTitle
                          )}&workshopDate=${encodeURIComponent(workshop.workshopDate.split('T')[0])}`}
                        >
                      <button className="btn btn-primary">Book now</button>
                      </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-lg code" id="linkfq">
        <Link to="/stdfaq">
          <h2 className="col-5 h faq">Frequently Asked Questions</h2>
        </Link>

        <hr />
        <div className="accordion" id="faq">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefaq" aria-expanded="true" aria-controls="collapsefaq">
                      <h2>How does AdanPradhan work?</h2>
                    </button>
                  </h2>
                  <div id="collapsefaq" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5><strong>AdanPradhan is a workshop booking platform that connects students with affordable workshops. </strong>You can browse and select workshops based on your interests and location. Colleges and institutions can also list their workshops on our platform.</h5> 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwofaq" aria-expanded="false" aria-controls="collapseTwofaq">
                      <h2>How do I book a workshop?</h2>
                    </button>
                  </h2>
                  <div id="collapseTwofaq" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5> <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora delectus rem reiciendis quisquam vel vitae aspernatur asperiores. Minima laudantium itaque beatae, praesentium voluptatem reiciendis officiis ipsa reprehenderit perspiciatis voluptas!</h5>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreefaq" aria-expanded="false" aria-controls="collapseThreefaq">
                      <h2>How can we a book a lab?</h2>
                    </button>
                  </h2>
                  <div id="collapseThreefaq" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5> <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero reiciendis magni consequatur odio ipsam eum voluptas, omnis eveniet obcaecati quas eos, sit quibusdam ea deleniti perferendis unde. Quia, asperiores eligendi?</h5>
                    </div>
                  </div>
                </div>
              </div>
                  
      </div>
     
      <Footer/>
    </div>
  );
}
