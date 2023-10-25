import React, { useState } from "react";
import Axios from "axios";

function Sample() {
  const [auth, setauth] = useState("");
  const author = () => {
    Axios.get("http://localhost:4000/post/list")
      .then((res) => {
        return res.data;
      })
      .then((res1) => {
        console.log(res1.data);
        const titles = res1.data.map((item) => item.title);
        console.log(titles);
        setauth(titles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Data from API</h1>
      <button onClick={author}>get response</button>
      {auth}
    </div>
  );
}

export default Sample;
