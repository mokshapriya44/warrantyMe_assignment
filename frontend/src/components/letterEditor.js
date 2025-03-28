import React, { useState } from "react";

const TextEditor = ({ onSave }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={() => onSave(text)}>Save Letter</button>
    </div>
  );
};

export default TextEditor;
