// Reducer pour gérer l'état des animaux
export const initialState = [
  { famille: "Canidés", espece: "Chiwawa", age: 1, prenom: "Nougat" },
  { famille: "Canidés", espece: "Boxer", age: 8, prenom: "Peggy" },
  { famille: "Félidés", espece: "Lion", age: 2, prenom: "Léo" },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "AJOUTER_ANIMAL":
      return [...state, action.payload]; // Ajoute un nouvel animal
    case "SUPPRIMER_ANIMAL":
      return state.filter((_, index) => index !== action.payload); // Supprime un animal
    case "MODIFIER_ANIMAL":
      return state.map((animal, index) =>
        index === action.payload.index ? action.payload.updatedAnimal : animal
      ); // Modifie un animal spécifique
    default:
      return state; // Retourne l'état actuel
  }
};
