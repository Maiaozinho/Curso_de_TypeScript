import React from "react";

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
    </div>
  );
}

export default App;