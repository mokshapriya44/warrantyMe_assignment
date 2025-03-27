// frontend/src/App.js
import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.displayName}</h2>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
