import React from "react";

interface ButtonProps{
    label: string;
    color: "red" | "blue" | "green";
    onClick: () => void;
}
export const Button = ({ label= "", onClick = () => {}, color="red" }) => {
  return (
    <button style={{backgroundColor: color}} data-testid="button" onClick={onClick}>
      {label}
    </button>
  );
};
