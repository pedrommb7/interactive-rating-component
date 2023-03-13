import React, { FC } from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import RatingButton from "../../molecules/RatingButton/RatingButton";
import Svg from "../../atoms/Svg/Svg";
import { IconStar } from "../../../assets/svg";
import "../../../App.scss";

const RatingCard = ({ stateOfThankyouCard }: { stateOfThankyouCard: any }) => {
  return (
    <main className="card flex flex--column flex--wrap flex__justify--center mx--28 px--24 py--32 border-radius--25">
      <Svg
        className="card__svg flex flex__align--center flex__justify--center border-radius--25 mb--20"
        icon={IconStar}
      />
      <Heading type={"h1"} text={"How did we do?"} />
      <Paragraph
        text={
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
      />
      <RatingButton />
      <Button
        className="card__submit flex flex__justify--center border-radius--25 p--16 "
        text={"SUBMIT"}
        onClick={stateOfThankyouCard}
      />
    </main>
  );
};

export default RatingCard;
