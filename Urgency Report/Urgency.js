import React from 'react';

function UrgencyPage() {
  const conditions = [
    { name: 'Minor Cut', urgency: 'Not Urgent', specialist: 'General Practitioner' },
    { name: 'Sprained Ankle', urgency: 'Slightly Urgent', specialist: 'Orthopedic Specialist' },
    { name: 'High Fever', urgency: 'Urgent', specialist: 'Internal Medicine Specialist' },
    { name: 'Chest Pain', urgency: 'Very Urgent', specialist: 'Cardiologist' },
    // few more should be added****
  ];

  const getColorForUrgency = (urgency) => {
    switch (urgency) {
      case 'Not Urgent':
        return 'green';
      case 'Slightly Urgent':
        return 'yellow';
      case 'Urgent':
        return 'orange';
      case 'Very Urgent':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div>
      <h1>Medical Condition Urgency</h1>
      <table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Urgency</th>
            <th>Specialist</th>
          </tr>
        </thead>
        <tbody>
          {conditions.map((condition, index) => (
            <tr key={index}>
              <td>{condition.name}</td>
              <td style={{ color: getColorForUrgency(condition.urgency) }}>
                {condition.urgency}
              </td>
              <td>{condition.specialist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UrgencyPage;
