import React, { useState } from 'react';

function SymptomInput({ onSubmit }) {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/check_symptoms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptoms }),
    });
    const data = await response.json();
    onSubmit(data.potential_conditions);
  };

  return (
    <div>
      <h2>Enter Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter symptoms (comma-separated)"
        ></textarea>
        <button type="submit">Check Symptoms</button>
      </form>
    </div>
  );
}

export default SymptomInput;
