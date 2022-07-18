import React from "react";
import styles from "./UsersList.module.css";
import Card from "./Card";
import { FaRegTrashAlt, FaPen } from "../../node_modules/react-icons/fa";

function UsersList({ users, setUsers, handleDeleteUser, handleEditUser }) {
  if (users.length === 0) return;

  return (
    <Card>
      <div className={styles["users-list"]}>
        {users.map((user) => {
          return (
            <div key={user.id} className={styles.user}>
              <p className={styles["users-list__user"]}>
                {user.username} ({user.age} years old)
              </p>

              <div className="btns">
                <button
                  className={styles["btn--icon"] + " " + styles["btn--edit"]}
                  onClick={() => handleEditUser(user.id)}
                >
                  <FaPen />
                </button>
                <button
                  className={styles["btn--icon"] + " " + styles["btn--delete"]}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default UsersList;
