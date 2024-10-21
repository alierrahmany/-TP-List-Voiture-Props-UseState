import React from 'react';

const Voiture = ({ image }) => {
  return <img src={image} alt="Voiture" style={{ width: '300px', height: 'auto' }} />;
};

export default Voiture;
