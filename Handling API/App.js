
import React, { useState } from 'react';
import './App.css';
import SymptomInput from './SymptomInput';

function App() {
  const [potentialConditions, setPotentialConditions] = useState([]);

  const handleSymptomSubmit = (conditions) => {
    setPotentialConditions(conditions);
  };

  return (
    <div className="App">
      <h1>Symptom Checker</h1>
      <SymptomInput onSubmit={handleSymptomSubmit} />
      <div>
        <h2>Potential Conditions</h2>
        <ul>
          {potentialConditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
