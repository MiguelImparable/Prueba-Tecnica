import "./styles/App.css";
import { HomepageList } from "./components/HomepageList.jsx";
import { Button } from "./components/Button";
import { useState } from "react";
import { saveAs } from "file-saver"

function App() {
  const [amount, setAmount] = useState(0);

  const click = () => {
    setAmount(document.getElementById("input").value);
    var data  = JSON.stringify(setAmount);
    saveAs(data, "./data/Arrays.JSON");
  };
  return (
    <div className="app">
      <div className="container">
        <h2>Elige la cantidad de Numeros Naturales Perfectos a Calcular:</h2>
        <div className="container-inf">
          <input type="number" id="input" />
          <br />
          <Button className={"bn"} texto={"Calcular"} manejarClick={click} />
        </div>
      </div>
      <div className="container-amounts">
        <HomepageList amount={amount} />
      </div>
    </div>
  );
}

export default App;
