import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
export default function Faq() {

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        // Perform your data fetching or asynchronous operations here
        // For demonstration, I'll simulate loading for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Link to="/faq"></Link>
      <div className="container space" id="C">
        <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
          <b>FAQ's</b>
        </div>
        <ul>
          <li>
            <p >
              <h2> How does AdanPradhan work?</h2>
              <br />
              AdanPradhan is a workshop booking platform that connects students with affordable workshops. You can browse and select workshops based on your interests and location. Colleges and institutions can also list their workshops on our platform.
             .{" "}
            </p>
          </li>
          <li>
            <p >
              <h2>How do I book a workshop?</h2>
              <br />
              To book a workshop, simply create an account on AdanPradhan, browse available workshops, select the one you're interested in, and follow the booking instructions provided.
             .
            </p>
          </li>
          <li>
            <p >
              <h2>Who will receive me in college? </h2>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              obcaecati ipsam ex quibusdam animi assumenda minus laboriosam ipsa
              tempore eum porro consectetur expedita neque minima, magn am culpa
              architecto libero quas.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Hic obcaecati ipsam ex quibusdam animi assumenda
              minus laboriosam ipsa tempore eum porro consectetur expedita neque
              minima, magn am culpa architecto libero quas.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Hic obcaecati ipsam ex
              quibusdam animi assumenda minus laboriosam ipsa tempore eum porro
              consectetur expedita neque minima, magn am culpa architecto libero
              quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              obcaecati ipsam ex quibusdam animi assumenda minus laboriosam ipsa
              tempore eum porro consectetur expedita neque minima, magn am culpa
              architecto libero quas.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </li>
        </ul>
      </div>
      <script>window.onload = function () {window.scrollTo(0, 0)};</script>
    </>
  );
}
