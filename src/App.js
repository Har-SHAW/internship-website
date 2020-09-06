import React from "react";
import "./App.css";
import First from "./components/first";
import Para from "./components/parallax";
import Section from "./components/section";
import Close from "./components/close";

function App() {
  return (
    <div className="App">
      <First />
      <Close />
      <Para />
      <Section />
    </div>
  );
}

export default App;
