import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
