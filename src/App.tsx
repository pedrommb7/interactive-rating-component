import React, { useState } from "react";
import RatingCard from "./components/organisms/RatingCard/RatingCard";
import ThankyouCard from "./components/organisms/ThankyouCard/ThankyouCard";
import Footer from "./components/organisms/Footer/Footer";
import "./App.scss";

function App() {
  const [showThankyouCard, setShowThankyouCard] = useState(false);
  const [selectedRating, setSelectedRating] = useState(Number);

  const handleClick = () => {
    setShowThankyouCard(true);
  };

  const handleValue = (ratingValue: React.SetStateAction<number>) => {
    setSelectedRating(ratingValue);
  };

  return (
    <div className="App flex flex--column flex__align--center flex__justify--center">
      {showThankyouCard ? (
        <ThankyouCard rate={selectedRating} />
      ) : (
        <RatingCard onRating={handleValue} stateOfThankyouCard={handleClick} />
      )}
      <Footer className="my--12" />
    </div>
  );
}

export default App;
