
const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcon = choiceFavorite ? "💞" : "💌"

  return (
    <div className="main-card">
      <img src={src} alt={alt} className ="main-image"/>
      <button onClick={handleHeartClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;