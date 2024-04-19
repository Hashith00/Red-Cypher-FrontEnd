import { useState } from "react";

import "./App.css";
import axios from "axios";
import DownloadButton from "./components/downloadButton.jsx";

function App() {
  const [count, setCount] = useState(0);
  //const [flag, getFlag] = useState("");

  const handleDownload = () => {
    const pdfUrl = "https://244.redcypher.org" + "/data_pdf.pdf";

    console.log(pdfUrl);

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "data_pdf.pdf";

    // Programmatically trigger a click event on the anchor element to start the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleDownloadZip = () => {
    const pdfUrl =
      "https://244.redcypher.org" + "/когда_произошел_первый_дефкон.rar";

    console.log(pdfUrl);

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "когда_произошел_первый_дефкон.rar";

    // Programmatically trigger a click event on the anchor element to start the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const getIntoHackersDen = async () => {
    console.log("hello");
    try {
      const responce = await axios.get(
        "https://244.redcypher.org/backend/api/getFlagUncry"
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
          <img src="/Red_long.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/Red_shaort.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LET ME HACK YOU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => getIntoHackersDen()}>Hackers Den</button>
        <button onClick={() => handleDownload()}>Hackers Den</button>
        <button onClick={() => handleDownloadZip()}>Zip</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <a href="game.html">Game</a>
      </div>
      <p className="read-the-docs">Click Here</p>
    </>
  );
}

export default App;
