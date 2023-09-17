import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function SymptomForm() {
  const [symptom, setSymptom] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!symptom) return; // Ensure the input is not empty

    try {

      const firebaseConfig = {
        
      };
      firebase.initializeApp(firebaseConfig);

      const db = firebase.firestore();

      
      await db.collection('symptoms').add({
        symptom,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Clear the input field
      setSymptom('');
    } catch (error) {
      console.error('Error adding symptom:', error);
    }
  };

  return (
    <div>
      <h2>Enter Symptom</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter symptom"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SymptomForm;
