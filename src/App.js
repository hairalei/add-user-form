import React, { useState } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  return (
    <div className="App">
      <Form
        users={users}
        setUsers={setUsers}
        setIsInvalid={setIsInvalid}
        setInvalidMessage={setInvalidMessage}
      />
      <UsersList users={users} setUsers={setUsers} />
      <Modal
        isInvalid={isInvalid}
        setIsInvalid={setIsInvalid}
        invalidMessage={invalidMessage}
      />
    </div>
  );
}

export default App;
