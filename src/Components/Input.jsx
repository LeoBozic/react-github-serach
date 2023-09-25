import React, { useState } from "react";

function Input({ newName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      newName(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput"> </label>
      GitHub username:
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. reduxjs"
      />
      <button type="submit">GO!</button>
    </form>
  );
}

export default Input;
