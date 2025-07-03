import React from "react";
import styles from "./Animalitem.module.css"

const AnimalItem = ({ src, alt }) => {
  return (
    <li className={styles.listItem}>
      <img src={src} alt={alt} className={styles.animalImg} />
    </li>
  );
}

export default AnimalItem;