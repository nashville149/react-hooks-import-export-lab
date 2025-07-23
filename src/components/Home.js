import React from "react";
import {qusername, city, image} from "../NavBar";
function Home() {
  return (
    <div id="home">
      <h1>
        {username} </h1>
        <p>{city}</p>
        <img src={image} alt={username} />
    </div>
  );
}

export default Home;