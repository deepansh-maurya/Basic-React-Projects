import { useState } from "react";
import { Slides } from "./Slides";
import "./App.css";
import { Data } from "./Data";
function App() {
  let data = Data;
  return (
    <>
      <Slides images={data}></Slides>
    </>
  );
}

export default App;
