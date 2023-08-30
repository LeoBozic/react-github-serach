import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserData from "./Components/UserData";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const newName = (newName) => {
    setName(newName);
    getData(newName);
  };

  const getData = (newName) => {
    fetch(`https://api.github.com/users/${newName}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          location: data.location,
          bio: data.bio,
          avatar: data.avatar_url,
        });
      });

    fetch(`https://api.github.com/users/${newName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const allRepos = [];
        data.map((repos) => allRepos.push(repos.name));
        setRepos(allRepos);
      });
  };

  return (
    <div className="App">
      {name === "" ? (
        <Input newName={newName} />
      ) : (
        <div className="userData">
          <UserData user={user} repos={repos} />
          <button onClick={() => setName("")}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
