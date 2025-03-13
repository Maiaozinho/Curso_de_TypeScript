import React from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
//CSS
import styles from './App.module.css'

// interface
import { ITask } from './interface/Task';

function App() {
  return (
    <div>  
    <Header/>
    <main className={styles.main}>
    <div>
      <h2>O que você vai fazer?</h2>
      <br />
      <TaskForm btnText="Criar Tarefa"/>
    </div>
    <div>
      <h2>Suas tarefas:</h2>
      <br />
      <TaskList />
    </div>
    </main>
    <Footer/>
    </div>
  );
}

export default App;