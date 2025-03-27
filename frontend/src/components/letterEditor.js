import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LetterEditor = ({ onSave }) => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h2>Create a Letter</h2>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={() => onSave(content)}>Save</button>
    </div>
  );
};

export default LetterEditor;
