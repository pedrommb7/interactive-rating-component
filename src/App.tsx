import React from "react";
import Paragraph from "./components/atoms/Paragraph/Paragraph";
import Heading from "./components/atoms/Heading/Heading";
import Button from "./components/atoms/Button/Button";
import Footer from "./components/organisms/Footer/Footer";
import "./App.scss";

function App() {
  const buttonValues = ["1", "2", "3", "4", "5"];

  return (
    <div className="App flex flex--column flex__align--center flex__justify--center">
      <main className="card flex flex--column flex--wrap flex__justify--center mx--28 px--24 py--32 border-radius--25">
        <img src="./assets/images/icon-star.svg" alt="icon-star" />
        <Heading type={"h1"} text={"How did we do?"} />
        <Paragraph
          text={
            "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          }
        />
        <section className="card__rating flex flex__justify--space-between mt--12 mb--20">
          {buttonValues.map((rating) => (
            <Button
              key={rating}
              className={
                "card__rating__number flex flex__align--center flex__justify--center border-radius--25"
              }
              text={rating}
            />
          ))}
        </section>

        <Button
          className="card__submit flex flex__justify--center border-radius--25 p--16 "
          text={"SUBMIT"}
        />
      </main>
      <Footer className="my--12" />
    </div>
  );
}

export default App;
