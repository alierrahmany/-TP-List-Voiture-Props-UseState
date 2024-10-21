import React, { useState } from 'react';
import ImageWithFilter from './ImageWithFilter.jsx';

import Voiture from './voitures/Voiture.jsx';
import SearchBar from './components/SearchBar.js.jsx';
import CategorySidebar from './components/CategorySidebar';
import ProductList from './components/ProductList';
import CacherVoiture from './cars/CacherVoiture.jsx';
import { voitures,categorie } from './voitures/Data.jsx';
import './App.css';



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categorie[0]);
  const filteredVoitures = voitures.filter((v) => v.catégorie === selectedCategory);
  
  const categories = ['samsung', 'nokia', 'LG', 'huawei', 'motorola'];
  const products = [
    { name: 'Samsung Galaxy NOTE 8', price: '3000dh', category: 'samsung', img: 'Screenshot_20221107_225213.jpg' },
    { name: 'huawei', price: '3000dh', category: 'huawei', img: 'Huawei.png' },
    { name: 'LG', price: '3000dh', category: 'LG', img: 'iLG.png' },
    { name: 'nokia', price: '3000dh', category: 'nokia', img: 'Nokya.png' },
    { name: 'Motorola', price: '3000dh', category: 'motorola', img: 'motorola.png' },
  ];

  const [activeCategory, setActiveCategory] = useState('samsung');
  const filteredProducts = products.filter(product => product.category === activeCategory);

  const voiture = [
    { id: 1, image: '../Voiture/renault-twingo.jpg' },
    { id: 2, image: '../Voiture/renault-clio.jpg' },
    { id: 3, image: '../Voiture/fiat-500.jpg' },
  ];

  return (
    <div className="app-container">
                <ImageWithFilter />
                <h1 style={{textAlign:'center'}}>Liste des voitures</h1>
           
           <div className="categories">
               {categorie.map((category,i) => (
                 <button key={i} onClick={() => setSelectedCategory(category)} >
                     {category}
                   </button>
               ))}
          </div>
           <div className="voiture-container">
                {filteredVoitures.map((vt,i) => (
                   <Voiture key={i} voiture={vt} />
                ))}
            </div>
            <br />
            <br />
         <h1 style={{textAlign:'center'}}>Liste Produits</h1>

      <SearchBar />
      <div className="main-content">
        <CategorySidebar categories={categories} setActiveCategory={setActiveCategory} />
        <ProductList products={filteredProducts} />
      </div>
      <div>
          <h1 style={{textAlign:'center'}}>Galerie des Voitures</h1>
          <CacherVoiture voitures={voiture} />
      </div>
    </div>
  );
};

export default App;
