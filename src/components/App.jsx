import React from "react";
import Register from "./Register";
import Login from "./Login";

var userIsRegistered = false;

function isRegistered() {
  return userIsRegistered ? <Login /> : <Register />;
}

function App() {
  return <div className="container">{isRegistered()}</div>;
}

export default App;
