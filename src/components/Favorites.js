import AnimalItem from "./AnimalItem";
import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <ul className="favorites">
      {favorites.map((animal, index) => <AnimalItem src={animal} alt={`favorites-${index}`} key={index} />)}
    </ul>
  )
};

export default Favorites;