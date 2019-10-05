//Destructuring
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
