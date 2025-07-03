import AnimalItem from "./AnimalItem";
import styles from "./Favorites.module.css";
import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <ul className={styles.favorites}>
      {favorites.map((animal, index) => <AnimalItem src={animal} alt={`favorites-${index}`} key={index} />)}
    </ul>
  )
};

export default Favorites;