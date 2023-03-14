import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Svg from "../../atoms/Svg/Svg";
import { IconThankyou } from "../../../assets/svg";
import "../../../App.scss";

const ThankyouCard = ({ rate }: { rate: number }) => {
  return (
    <main className="card flex flex--column flex__align--center mx--24 px--20 py--32 border-radius--25">
      <Svg icon={IconThankyou} />
      <Paragraph
        className="card__rating__statement border-radius--25 mt--20 mb--32 px--12 py--8"
        text={`You selected ${rate} out of 5`}
      />
      <Heading type={"h1"} text={"Thank you!"} />
      <Paragraph
        className="text-align--center"
        text={
          "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
        }
      />
    </main>
  );
};

export default ThankyouCard;
