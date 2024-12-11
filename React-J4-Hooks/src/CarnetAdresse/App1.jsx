import React, { useReducer, useEffect } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactTable from "./components/ContactTable";
import {
  getContactsFromStorage,
  saveContactsToStorage,
} from "./utilitaires/localStorage";
import "./.App1.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Reducer pour gérer les contacts
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "DELETE_CONTACT":
      return state.filter((_, index) => index !== action.payload);
    case "EDIT_CONTACT":
      return state.map((contact, index) =>
        index === action.payload.index ? action.payload.updatedContact : contact
      );
    default:
      return state;
  }
};

const App1 = () => {
  const [contacts, dispatch] = useReducer(reducer, [], getContactsFromStorage);

  // Sauvegarde dans le localStorage à chaque mise à jour des contacts
  useEffect(() => {
    saveContactsToStorage(contacts);
  }, [contacts]);

  return (
    <div className="app-container container">
      <h1 className="text-center my-4">Carnet d'Adresses</h1>
      <AddContactForm dispatch={dispatch} />
      <ContactTable contacts={contacts} dispatch={dispatch} />
    </div>
  );
};

export default App1;
