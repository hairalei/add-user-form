import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "./Card";

function Form({ setIsInvalid, setUsers, setInvalidMessage }) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    }

    if (e.target.id === "age") {
      setAge(e.target.value);
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (username.length === 0 || age.length === 0) {
      setIsInvalid(true);
      setInvalidMessage(
        "Please enter a valid username and age (non-empty values)."
      );
      return;
    }

    if (age < 0 || age > 130) {
      setIsInvalid(true);
      setInvalidMessage("Please enter a valid age (between 1 and 130).");
      return;
    }

    const id = username[0] + age + Math.trunc(Math.random() * 100000);
    const user = { username, age, id };
    setUsername("");
    setAge("");

    setUsers((prev) => {
      return [...prev, user];
    });
  };

  return (
    <Card>
      <form action="#" className={styles.form} onSubmit={handleAddUser}>
        <label htmlFor="username" className={styles["form__label"]}>
          Username
        </label>
        <input
          className={styles["form__input"]}
          type="text"
          name="username"
          id="username"
          onChange={handleInputChange}
          value={username}
        />

        <label htmlFor="age" className={styles["form__label"]}>
          Age
        </label>
        <input
          className={styles["form__input"]}
          type="number"
          name="age"
          id="age"
          // min={1}
          // max={120}
          onChange={handleInputChange}
          value={age}
        />

        <button
          type="submit"
          className={`${styles.btn} btn`}
          onSubmit={handleAddUser}
        >
          Add User
        </button>
      </form>
    </Card>
  );
}

export default Form;
