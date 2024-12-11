import React, { useState } from "react";

const FormAnimal = ({ ajouterAnimal }) => {
  const [formData, setFormData] = useState({
    famille: "",
    espece: "",
    prenom: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.famille &&
      formData.espece &&
      formData.prenom &&
      formData.age
    ) {
      ajouterAnimal({ ...formData, age: parseInt(formData.age, 10) });
      setFormData({ famille: "", espece: "", prenom: "", age: "" });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Ajouter un animal</h2>
      <form className="form-animal" onSubmit={handleSubmit}>
        <label>
          Famille :
          <input
            type="text"
            name="famille"
            value={formData.famille}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Espèce :
          <input
            type="text"
            name="espece"
            value={formData.espece}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Âge :
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default FormAnimal;
