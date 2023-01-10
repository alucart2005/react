import "./styles.css";
import { useState } from "react";
import FormUser from "./components/FormUser";
import usersData from "./data/userData.js";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState(usersData);

  console.log(users);

  const addUser = (data) => {
    setUsers([...users, data]);

    console.log(users);
  };

  return (
    <div className="App">
      <FormUser createUserData={(data) => addUser(data)} />
      <UsersList users={users} />
    </div>
  );
}

export default App;