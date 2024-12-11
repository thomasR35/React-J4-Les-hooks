import React, { useReducer } from "react";
import FormAnimal from "./Animaux/FormAnimal";
import TableauAnimaux from "./Animaux/TableauAnimaux";
import { reducer, initialState } from "./reducer";
import "./App.scss";
import App1 from "./CarnetAdresse/App1";

const App = () => {
  const [animaux, dispatch] = useReducer(reducer, initialState);

  // Fonction pour ajouter un animal
  const ajouterAnimal = (nouvelAnimal) => {
    dispatch({ type: "AJOUTER_ANIMAL", payload: nouvelAnimal });
  };

  // Fonction pour supprimer un animal
  const supprimerAnimal = (index) => {
    dispatch({ type: "SUPPRIMER_ANIMAL", payload: index });
  };

  // Fonction pour modifier un animal
  const modifierAnimal = (index, updatedAnimal) => {
    dispatch({ type: "MODIFIER_ANIMAL", payload: { index, updatedAnimal } });
  };

  return (
    <div className="app-container">
      <h1>Gestion des Animaux</h1>
      <FormAnimal ajouterAnimal={ajouterAnimal} />
      <TableauAnimaux
        animaux={animaux}
        supprimerAnimal={supprimerAnimal}
        modifierAnimal={modifierAnimal}
      />
      <App1 />
    </div>
  );
};

export default App;
