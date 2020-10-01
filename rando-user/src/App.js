import React, { useState, useEffect } from "react";
import axios from "axios";
import UserSummary from "./UserSummary";
import "./App.css";

function App() {
  const [currentUser, updateCurrentUser] = useState("");

  useEffect(() => {
    const makeApiCall = async () => {
      const response = await axios.get(`https://api.randomuser.me/ `);
      updateCurrentUser(response.data.results[0]);
      console.log(response.data.results[0]);
    };
    makeApiCall();
  }, []);

  if (currentUser.name === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Random Person App</h1>
      <UserSummary userData={currentUser} />
    </div>
  );
}

export default App;
