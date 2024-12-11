import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddContactForm = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    dateNaissance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.nom &&
      formData.prenom &&
      formData.telephone &&
      formData.email
    ) {
      dispatch({ type: "ADD_CONTACT", payload: formData });
      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        dateNaissance: "",
      });
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date de Naissance</Form.Label>
        <Form.Control
          type="date"
          name="dateNaissance"
          value={formData.dateNaissance}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ajouter Contact
      </Button>
    </Form>
  );
};

export default AddContactForm;
