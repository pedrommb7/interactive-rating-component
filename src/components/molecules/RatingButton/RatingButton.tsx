import React from "react";
import Button from "../../atoms/Button/Button";

const RatingButton = () => {
  const buttonValues = ["1", "2", "3", "4", "5"];
  return (
    <section className="card__rating flex flex__justify--space-between mt--12 mb--24">
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
  );
};

export default RatingButton;
