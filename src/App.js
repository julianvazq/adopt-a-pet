import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Milu",
      animal: "Dog",
      breed: "Non-pedigree"
    }),
    React.createElement(Pet, {
      name: "Shanti",
      animal: "Dog",
      breed: "Non-pedigree"
    }),
    React.createElement(Pet, {
      name: "Miki",
      animal: "Dog",
      breed: "Mixed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
