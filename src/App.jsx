import { useState } from "react";

import redLogo from "./assets/Red Cypher Font with logo 1.0.png";
import redSmallLogo from "./assets/Red Cypher Logo - white removed.png";
import "./App.css";
import axios from "axios";
import DownloadButton from "./components/downloadButton.jsx";

function App() {
  const [count, setCount] = useState(0);
  //const [flag, getFlag] = useState("");

  const getIntoHackersDen = async () => {
    console.log("hello");
    try {
      const responce = await axios.get(
        "http://localhost:3000/api/getFlagUncry"
      );
      console.log(responce.data["Flag"]);

      // getFlag(responce.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={redLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={redSmallLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LET ME HACK YOU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => getIntoHackersDen()}>Hackers Den</button>
        <DownloadButton filePath="/assets/data_pdf.pdf" fileName="Data file" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click Here</p>
    </>
  );
}

export default App;
