import React, { useState } from "react";
import FormAnimal from "./Animaux/FormAnimal";
import TableauAnimaux from "./Animaux/TableauAnimaux";
import "./App.scss";

const App = () => {
  const [animaux, setAnimaux] = useState([
    { famille: "Canidés", espece: "Chiwawa", age: 1, prenom: "Nougat" },
    { famille: "Canidés", espece: "Boxer", age: 8, prenom: "Peggy" },
    { famille: "Félidés", espece: "Lion", age: 2, prenom: "Léo" },
    {
      famille: "Canidés",
      espece: "Berger Australien",
      age: 10,
      prenom: "Félix",
    },
  ]);

  const ajouterAnimal = (nouvelAnimal) => {
    setAnimaux([...animaux, nouvelAnimal]);
  };

  return (
    <div className="app-container">
      <h1>Gestion des Animaux</h1>
      <FormAnimal ajouterAnimal={ajouterAnimal} />
      <TableauAnimaux animaux={animaux} />
    </div>
  );
};

export default App;
