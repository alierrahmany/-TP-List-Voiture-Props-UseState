import React, { useState } from 'react';

function ImageWithFilter() {
  const [filter, setFilter] = useState('none');

  // Fonctions pour changer le filtre
  const applyGrayscale = () => setFilter('grayscale(100%)');
  const applySepia = () => setFilter('sepia(100%)');
  const applyBlur = () => setFilter('blur(5px)');
  const resetFilter = () => setFilter('none');

  return (
    <div>
      <h2>Modifier le style de l'image avec des filtres</h2>
      <img
        src="../Voiture/renault-clio.jpg"
        alt="Exemple"
        style={{ filter: filter, width: '300px', height: '300px' }}
      />
      <div>
        <button onClick={applyGrayscale}>Grayscale</button>
        <button onClick={applySepia}>Sepia</button>
        <button onClick={applyBlur}>Blur</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
    </div>
  );
}

export default ImageWithFilter;