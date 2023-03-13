import React, { useState } from "react";
import RatingCard from "./components/organisms/RatingCard/RatingCard";
import ThankyouCard from "./components/organisms/ThankyouCard/ThankyouCard";
import Footer from "./components/organisms/Footer/Footer";
import "./App.scss";

function App() {
  const [showThankyouCard, setShowThankyouCard] = useState(false);

  const handleClick = () => {
    setShowThankyouCard(true);
  };

  return (
    <div className="App flex flex--column flex__align--center flex__justify--center">
      <RatingCard stateFromParentComponent={handleClick} />
      {showThankyouCard ? <ThankyouCard /> : null}
      <Footer className="my--12" />
    </div>
  );
}

export default App;
