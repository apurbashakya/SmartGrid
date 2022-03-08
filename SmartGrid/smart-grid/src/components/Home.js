import React, { useState } from "react";
import Analysis from "./Analysis";

const Home = () => {
  const homeClick = () => {
  };
  const [toggled, setToggled] = useState(false);

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);

  return (
    <div className="Home">
      <h2>DASHBOARD</h2>

      <br />
      <div>
        <button onClick={toggleImage}>Analysis</button>
        <button>Appliances</button>
        <button>Savings</button>
        <button>Language</button>
      </div>
      <div>{toggled && <Analysis></Analysis>}</div>
    </div>
  );
};

export default Home;
