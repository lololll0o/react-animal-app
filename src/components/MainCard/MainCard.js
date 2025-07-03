import styles from "./MainCard.module.css"

const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcon = choiceFavorite ? "💞" : "💌"

  return (
    <div className={styles.card}>
      <img src={src} alt={alt} className={styles.image} />
      <button onClick={handleHeartClick} className={styles.heartButton}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;