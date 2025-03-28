import React from "react";
import TextEditor from "./components/letterEditor";

const App = () => {
  const saveLetter = async (content) => {
    console.log("Letter Content:", content);
    try {
      const formData = new FormData();
      formData.append("file", new Blob([content], { type: "text/plain" }));

      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(`File Uploaded! ID: ${data.fileId}`);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <div>
      <h1>Letter Editor</h1>
      <TextEditor onSave={saveLetter} />
    </div>
  );
};

export default App;
