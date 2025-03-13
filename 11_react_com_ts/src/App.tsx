import React from "react";
// 4 - importação de componentes
import firstComponent from "./components/firstComponent";

// 5 - desestruturando props
import secondComponent from "./components/secondComponent";
function App() {

// 1 - variaveis
const name: string = "Maiao";
const age: number = 20;
const isWorking: boolean = true;

// 2 - funções
const UserGreeting = (name: string): string => {
  return `Ola, ${name}!`
}

  return (
    <div className="App">
    <h1>TypeScript com react</h1>
    <h2>Nome: {name}</h2>
    <p>Idade: {age}</p>
    {isWorking &&
    <div>
    <p>Está trabalhando!</p>
    </div>
      }
      <h3>{UserGreeting(name)}</h3>
      {/* <h3>{UserGreeting(age)}</h3> */}
      <h3>firstComponent</h3>
      <secondComponent name="maiao"/>
    </div>
  );
}

export default App;