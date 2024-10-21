import React, { useState } from 'react';
import Voiture from './Voiture'; // Composant d'affichage d'image

const CacherVoiture = ({ voitures }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * voitures.length)); // Image aléatoire au chargement
  const [isVisible, setIsVisible] = useState(true);

  // Gérer le bouton "Suivant"
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % voitures.length);
  };

  // Gérer le bouton "Précédent"
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + voitures.length) % voitures.length);
  };

  // Gérer le bouton "Cacher/Voir"
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <Voiture image={voitures[currentIndex].image} />}
      <div >
        <button onClick={toggleVisibility}>
          {isVisible ? 'Cacher' : 'Voir'}
        </button>
        <button onClick={handlePrevious}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </div>
  );
};

export default CacherVoiture;
