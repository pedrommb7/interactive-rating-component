import React from "react";
import RatingCard from "./components/organisms/RatingCard/RatingCard";
import Footer from "./components/organisms/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App flex flex--column flex__align--center flex__justify--center">
      <RatingCard />
      <Footer className="my--12" />
    </div>
  );
}

export default App;
