import React from 'react';

const CategorySidebar = ({ categories, setActiveCategory }) => (
  <div className="category-sidebar">
    <h3>Catégories Mobile</h3>
    <ul>
      {categories.map((category, index) => (
        <li key={index} onClick={() => setActiveCategory(category)}>
          {category}
        </li>
      ))}
    </ul>
  </div>
);

export default CategorySidebar;
