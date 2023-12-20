import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : "Nitin",
    age: 19
  }
  let newArr = [1,2,3,4,5,6,7,8,9,10,11]

  return (
    <>
      <h1 className="bg-green-400 text-black  rounded-xl">Tailwind Test</h1>
      <Card username="Nitin" btnText="visit me" />
    </>
  );
}

export default App;
