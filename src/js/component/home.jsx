import React from "react";
import { useState } from "react";

function Home() {
  const [color, setColor] = useState("amarillo");

  return (
    <>
      <div className="poste"></div>
      <div className="Container">
        <div onClick={() => setColor("rojo")} className={"circulos rojo" + (color=="rojo" ? " glow" : "")}></div>
        <div onClick={() => setColor("amarillo")} className={"circulos amarillo" + (color=="amarillo" ? " glow" : "")}></div>
        <div onClick={() => setColor("verde")} className={"circulos verde" + (color=="verde" ? " glow" : "")}></div>
      </div>
    </>
  );
}

export default Home;
