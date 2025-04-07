// Reacti ja hookide import
import React, { useState } from 'react';
// Quiz-komponendi import
import Quiz from './components/Quiz';
// Stiilid
import './App.css';

// Rakenduse põhikomponent
function App() {
  // Seisund: kas mäng on alustatud
  const [start, setStart] = useState(false);
  // Valitud kategooria ja raskusaste
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  // Funktsioon mängu alustamiseks, kui valikud on tehtud
  const handleStart = () => {
    if (category && difficulty) {
      setStart(true);
    } else {
      alert('Palun vali kategooria ja raskusaste');
    }
  };

  // Funktsioon mängu taaskäivitamiseks
  const handleRestart = () => {
    setStart(false);
    setCategory('');
    setDifficulty('');
  };

  // Kui mäng on alustatud, kuvatakse viktoriinikomponent
  if (start) {
    return (
      <Quiz
        category={category}
        difficulty={difficulty}
        onRestart={handleRestart}
      />
    );
  }

  // Avaleht – kategooria ja raskusastme valimine
  return (
    <div className="app-container">
      <h1>Viktoriin</h1>

      {/* Kategooria valik */}
      <div className="form-group">
        <label>Kategooria:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">-- Vali kategooria --</option>
          <option value="9">Üldteadmised</option>
          <option value="17">Teadus ja loodus</option>
          <option value="23">Ajalugu</option>
          <option value="22">Geograafia</option>
        </select>
      </div>

      {/* Raskusastme valik */}
      <div className="form-group">
        <label>Raskusaste:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">-- Vali raskusaste --</option>
          <option value="easy">Lihtne</option>
          <option value="medium">Keskmine</option>
          <option value="hard">Raske</option>
        </select>
      </div>

      {/* Mängu käivitamise nupp */}
      <button className="start-button" onClick={handleStart}>
        Alusta mängu
      </button>

      {/* Jalus (footer) kontaktandmete ja autori infoga */}
      <footer className="footer">
        <p>Done by: <strong>Kirill Zahharov</strong></p>
        <p>Õpperühm: EDTR43</p>
        <p>Email: kizahh@taltech.ee</p>
        <p>Kool: <strong>Tallinna Tehnikaülikool Virumaa Kolledž</strong></p>
      </footer>
    </div>
  );
}

export default App;
