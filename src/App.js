import { useState } from "react";
import Actions from "./Components/Actions";
import Counter from "./Components/Counter";

function App() {
  const [count, setcount] = useState(0);

  const callSetcount = (data) => {
    setcount(data);
  };

  return (
    <div className="App">
      <div className="myContainer">
        <Counter count={count} />
        <Actions count={count} callOperation={callSetcount} />
      </div>
    </div>
  );
}

export default App;
