import React from "react";

function DownloadButton({ filePath, fileName }) {
  const handleDownload = () => {
    const pdfUrl = filePath;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <button onClick={handleDownload}>Download {fileName}</button>;
}

export default DownloadButton;
