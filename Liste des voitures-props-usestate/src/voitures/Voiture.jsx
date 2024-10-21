import React from 'react';
import './voiture.css'; 
function Voiture (props) {
    const { titre, catégorie, prix, photo } = props.voiture;
    return (
        <div className="voiture-card">
                <img src={`Voiture/${photo}`} alt={titre} className="voiture-img" />
                <h2 className="voiture-title">{titre}</h2>
                <p className="voiture-category">Catégorie: {catégorie}</p>
                <p className="voiture-price">Prix: {prix} Dh</p>
    </div>
    );
};

export default Voiture;