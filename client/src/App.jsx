import { useState } from "react";
import "./App.css";
import Signup from "./Components/Singup/Signup";
import Login from "./Components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signup />
    </>
  );
}

export default App;
