import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

const url = process.env.REACT_APP_API_URL;

function App() {
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(`${url}`);
        setTitle(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTitle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title}</p>
      </header>
    </div>
  );
}

export default App;
