import './App.css';
import React from 'react';
import PageTitle from './componenets/PageTitle';
import AnimalForm from "./componenets/AnimalForm";
import MainCard from './componenets/MainCard';
import AnimalItem from './componenets/AnimalItem';
import Favorites from './componenets/Favorites';


const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};


function App() {
  const animal01 = process.env.PUBLIC_URL + "/img/fox.png";
  const animal02 = process.env.PUBLIC_URL + "/img/elephant.png";

  const [mainAnimal, setMainAnimal] = React.useState(animal01);

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

  function updateMainCard() {
    setMainAnimal(animal02);
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
      <PageTitle>{count}페이지🌴</PageTitle>
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
