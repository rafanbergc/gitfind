import "./styles.css";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import Profile from "../../components/profile";
import Repository from "../../components/repository";
import React from "react";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Input setCurrentUser={setCurrentUser} setRepos={setRepos} />

        {currentUser ? (
          <>
            <Profile user={currentUser} />
            <hr />
            {repos &&
              repos.map((repo) => (
                <Repository
                  key={repo.id}
                  title={repo.name}
                  description={repo.description || "No description available"}
                />
              ))}
          </>
        ) : null}
        
      </div>
    </div>
    
  );
}

export default App;
