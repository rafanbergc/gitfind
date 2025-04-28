import React from "react";
import { useState } from "react";
import "./styles.css";

const Input = ({ setCurrentUser, setRepos }) => {
  const [user, setUser] = useState("");

  const getData = async () => {
    const userData = await fetch(`http://api.github.com/users/${user}`);
    const newUser = await userData.json();

    const { avatar_url, name, login, bio } = newUser;
    setCurrentUser({ avatar_url, name, login, bio });
    console.log(newUser);

    const reposData = await fetch(`http://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();
    setRepos(newRepos);
  };

  return (
    <div className="find">
      <input
        name="usuario"
        placeholder="@username"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); 
            getData();
          }
        }}
      />

      <button type="button" onClick={getData}>Buscar</button>
    </div>
  );
};

export { Input };
