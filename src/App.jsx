import { useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {setJoke(response.data.value)})
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <h1>Holla</h1>
        <p>super blague de la mort qui tue</p>
        <button type="button" onClick={getJoke}>
          click here
        </button>
        <p>{joke}</p>
      </div>
    </>
  );
}

export default App;
