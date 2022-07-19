import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import Modal from "./components/Modal";

function App() {
  const localData = JSON.parse(window.localStorage.getItem("localData")) || [];
  const data = localData.length > 0 ? localData : [];

  const [users, setUsers] = useState(data);
  const [isInvalid, setIsInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState("");

  useEffect(() => {
    console.log("save");
    window.localStorage.setItem("localData", JSON.stringify(users));
  }, [users]);

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

    const id = isEditing
      ? editID
      : username[0] + age + Math.trunc(Math.random() * 100000);
    const user = { username, age, id };

    setUsername("");
    setAge("");
    setIsEditing(false);

    setUsers((prev) => {
      const newUsers = isEditing ? prev.filter((user) => user.id !== id) : prev;
      return [...newUsers, user];
    });
  };

  const handleEditUser = (userId) => {
    setIsEditing(true);
    const user = users.filter((user) => user.id === userId);

    setUsername(user[0].username);
    setAge(user[0].age);
    setEditID(userId);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prev) => {
      const updatedUsers = prev.filter((user) => user.id !== userId);

      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <Form
        username={username}
        age={age}
        handleAddUser={handleAddUser}
        handleInputChange={handleInputChange}
      />
      <UsersList
        users={users}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
      />
      <Modal
        isInvalid={isInvalid}
        setIsInvalid={setIsInvalid}
        invalidMessage={invalidMessage}
      />
    </div>
  );
}

export default App;
