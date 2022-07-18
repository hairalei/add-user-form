import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "./Card";

function Form({ username, age, handleAddUser, handleInputChange }) {
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
