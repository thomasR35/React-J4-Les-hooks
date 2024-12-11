import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditContactModal from "./EditContactModal";

const ContactTable = ({ contacts, dispatch }) => {
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_CONTACT", payload: index });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const isBirthday = (date) => {
    if (!date) return false;
    const today = new Date();
    const birthDate = new Date(date);
    return (
      today.getDate() === birthDate.getDate() &&
      today.getMonth() === birthDate.getMonth()
    );
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Date de Naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr
              key={index}
              className={
                isBirthday(contact.dateNaissance) ? "table-warning" : ""
              }
            >
              <td>{contact.nom}</td>
              <td>{contact.prenom}</td>
              <td>{contact.telephone}</td>
              <td>{contact.email}</td>
              <td>{contact.dateNaissance || "N/A"}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(index)}
                >
                  Modifier
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {editIndex !== null && (
        <EditContactModal
          contact={contacts[editIndex]}
          index={editIndex}
          dispatch={dispatch}
          onHide={() => setEditIndex(null)}
        />
      )}
    </>
  );
};

export default ContactTable;
