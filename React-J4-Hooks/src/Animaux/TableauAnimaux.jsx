import React from "react";

const TableauAnimaux = ({ animaux }) => {
  return (
    <table className="tableau-animaux">
      <thead>
        <tr>
          <th>Famille</th>
          <th>Espèce</th>
          <th>Prénom</th>
          <th>Âge</th>
        </tr>
      </thead>
      <tbody>
        {animaux.map((animal, index) => (
          <tr key={index}>
            <td>{animal.famille}</td>
            <td>{animal.espece}</td>
            <td>{animal.prenom}</td>
            <td>{animal.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauAnimaux;
