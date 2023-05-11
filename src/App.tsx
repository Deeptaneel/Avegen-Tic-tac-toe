import React from 'react';
import "./App.css";
import styles from "./styles/Home.module.css"
import Board from "./containers/Board";


function App() {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}

export default App;
