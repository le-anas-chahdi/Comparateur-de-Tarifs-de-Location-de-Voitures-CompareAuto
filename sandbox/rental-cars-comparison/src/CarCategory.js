import React from 'react';

function CarCategory({ title, registrationFee, unlockFee, durations }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Frais d'inscription : {registrationFee}</h3>
      <h3>Frais de déverrouillage : {unlockFee}</h3>
      <table>
        <thead>
          <tr>
            <th>Durée</th>
            <th>Prix</th>
            <th>Km inclus</th>
          </tr>
        </thead>
        <tbody>
          {durations.map((duration, index) => (
            <tr key={index}>
              <td>{duration.duration}</td>
              <td>{duration.price}</td>
              <td>{duration.kmIncluded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarCategory;
