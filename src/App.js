import './App.css';
import { useState } from 'react';

function App() {
  //Version 1: 
  //const [user, setUser] = useState();

  //Version 2:
  //const [user, setUser] = useState("");

  //Version 3:
  // useState version for properties with arrays
  const [user, setUser] = useState({
    username: "",
    email: "",
    images:[]
  });

  /*
   * This is the structure of the user Object to load in the UI
   * Despite that the Object hasn't been developed yet, the code
   * for it can be done
   */
  // user: {
  //   name: "Esteban",
  //   email: "stv.herrera@gmail.com",
  //   images: ["profile.png", "cover.png"];
  // }

  return (
    <div className="App">
      <div>
      <h2>Problem:</h2>
        <span>Username is: {user.name}</span>
      </div>
      <div>
          <h2>Handling 1:</h2>
        {user && <span>Username is: {user.name}</span>}
      </div>
      <div>
        <h2>Handling 2:</h2>
        <span>Username is: {user?.name}</span>
        <p>💁️ the same as:</p>
        <span>Username is: {user && user.name}</span>
      </div>
      <div>
        <h2>Handling arrays:</h2>
        <span>Username is: {user && user.name}</span>
        <span>Profile picture is: {user.images[1]}</span>
      </div>
    </div>
  );
}

export default App;
