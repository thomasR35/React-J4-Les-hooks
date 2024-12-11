import React, { useState } from "react";

const TableauAnimaux = ({ animaux, supprimerAnimal, modifierAnimal }) => {
  const [editIndex, setEditIndex] = useState(null); // Indique quel animal est en cours d'édition
  const [editForm, setEditForm] = useState({}); // Contient les données modifiées

  // Active le mode édition pour un animal
  const startEdit = (index, animal) => {
    setEditIndex(index);
    setEditForm(animal); // Préremplit le formulaire avec les données existantes
  };

  // Gère les modifications dans le formulaire d'édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // Enregistre les modifications
  const handleSaveEdit = () => {
    modifierAnimal(editIndex, editForm); // Appelle la fonction pour modifier l'animal
    setEditIndex(null); // Quitte le mode édition
  };

  return (
    <table className="tableau-animaux">
      <thead>
        <tr>
          <th>Famille</th>
          <th>Espèce</th>
          <th>Prénom</th>
          <th>Âge</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {animaux.map((animal, index) => (
          <tr key={index}>
            {editIndex === index ? (
              <>
                <td>
                  <input
                    type="text"
                    name="famille"
                    value={editForm.famille}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="espece"
                    value={editForm.espece}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="prenom"
                    value={editForm.prenom}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={editForm.age}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                </td>
                <td>
                  <button onClick={handleSaveEdit}>Enregistrer</button>
                  <button onClick={() => setEditIndex(null)}>Annuler</button>
                </td>
              </>
            ) : (
              <>
                <td>{animal.famille}</td>
                <td>{animal.espece}</td>
                <td>{animal.prenom}</td>
                <td>{animal.age}</td>
                <td>
                  <button onClick={() => startEdit(index, animal)}>
                    Modifier
                  </button>
                  <button onClick={() => supprimerAnimal(index)}>
                    Supprimer
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauAnimaux;
