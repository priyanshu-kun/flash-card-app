import React, { useState, useEffect } from 'react';
import seedData from './seed';
import './App.css';
import './style/navbar.css';
import Card from './components/card';

function App() {
  // const [seed, setSeed] = useState(seedData);
  const [currentPointer, setCurrentPointer] = useState(0);
  const [showAns, setShowAns] = useState(false);

  const showCard = () => {
    setShowAns(!showAns);
  };

  const changeCard = () => {
    setCurrentPointer(Math.floor(Math.random() * seedData.length));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Flash cards</h1>
      </nav>
      <section className="wrapper">
        <Card cardData={seedData[currentPointer]} flag={showAns} />
        <div className="buttons">
          <button className="btn" onClick={showCard}>
            Show
          </button>
          <button className="btn" onClick={changeCard}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
