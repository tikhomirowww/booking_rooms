import React, { FC } from "react";
import { IInput } from "./Input.types";
import "./adaptiveInput.css";
import "./Input.css";

const Input: FC<IInput> = ({ value, className, onChange, placeholder }) => {
  return (
    <input
      className="input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
