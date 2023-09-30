import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Style_home.css";
export default function Footer() {
  const handleEmailClick = () => {
    // Replace 'your-email@example.com' with the recipient's email address
    const recipientEmail = "adanpradhan@gmail.com";

    // Replace 'Subject' with the desired email subject
    const emailSubject = "Queries";

    // Replace 'Hello, this is the body of the email.' with the email body
    const emailBody = "Hello, I need help to  about the workshops";

    // Combine the email parts into a 'mailto:' link
    const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;

    // Open the user's default email client when the link is clicked
    window.location.href = mailtoLink;
  };
  return (
    <>
      <div>
        <footer
          className="text-center text-white wrappingdiv"
          style={{ backgroundColor: "#bbbdc5" }}
        >
          <div className="container-fluid bg-dark " id="linkus">
            <div className="row">
              <div className="col-md-12 contact">
                <h1 className="display-5" id="font">
                  ADAN PRADAN
                </h1>
                <p>
                  Our mission is to empower young Students to be the inventors
                  and creators.
                </p>
                <div className="container">
                  <div className="row">
                    <div className="col-md">
                      <div className="About-us">
                        <h1> About Us </h1>
                        <hr />
                        <h4>Contact:7075451131</h4>
                        <h4>
                          Email:{" "}
                          <a
                            style={{ color: "white" }}
                            href=""
                            onClick={handleEmailClick}
                          >
                            adanpradhan@gmail.com
                          </a>
                        </h4>
                        <h3> follow us on </h3>
                        <a
                          href="https://twitter.com/bhavaniprasad74"
                          target="_blank"
                          className="fa fa-twitter"
                          id="us"
                        ></a>
                        <a href="#" className="fa fa-linkedin" id="us"></a>
                        <a
                          href="https://github.com/Bhavani0310"
                          target="_blank"
                          className="fa fa-github"
                          id="us"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
          </div>
        </footer>
      </div>
    </>
  );
}
