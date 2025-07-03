import React from 'react';
import PageTitle from './components/PageTitle/PageTitle';
import AnimalForm from "./components/AnimalForm/AnimalForm";
import MainCard from './components/MainCard/MainCard';
import AnimalItem from './components/Favorites/AnimalItem';
import Favorites from './components/Favorites/Favorites';
import jsonLocalStorage from "./utils/jsonLocalStorage"



const OPEN_API_DOMAIN = "https://cataas.com";

const fetchCat = async (text) => {

  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?width=500&height=500&json=true`);
  const responsejson = await response.json();

  return responsejson.url;
}

function App() {

  const [mainAnimal, setMainAnimal] = React.useState(`${OPEN_API_DOMAIN}/cat`);

  const [favorites, setFavorites]
    = React.useState(() => {
      return jsonLocalStorage.getItem("favorites") || [];
    });

  const [count, setCount]
    = React.useState(() => {
      return jsonLocalStorage.getItem("count") || 1;
    });

  const choiceFavorite = favorites.includes(mainAnimal);

  function incrementCount() {
    setCount((set) => {
      const nextCount = set + 1;
      jsonLocalStorage.setItem("count", nextCount);
      return nextCount;
    });
  }

  async function updateMainCard(value) {
    const Cat = await fetchCat(value);
    setMainAnimal(Cat);
    incrementCount();
  }

  function handleHeartClick() {
    setFavorites((pre) => {
      const nextFavorites = [...pre, mainAnimal];
      localStorage.setItem("favorites", JSON.stringify(nextFavorites));
      return nextFavorites;
    });
  }

  return (
    <div>
      <PageTitle>고양이가 세상을 구한다 🐱🧡</PageTitle>
      <AnimalForm updateMainCard={updateMainCard} />
      <MainCard
        src={mainAnimal}
        alt="fox"
        handleHeartClick={handleHeartClick}
        choiceFavorite={choiceFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
