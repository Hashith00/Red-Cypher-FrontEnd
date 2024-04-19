import React from "react";

function DownloadButton({ filePath, fileName }) {
  const handleDownload = () => {
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error downloading the file: ", error));
  };
  return <button onClick={handleDownload}>Download {fileName}</button>;
}

export default DownloadButton;
