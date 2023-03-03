import React, { FC } from "react";
import classNames from "classnames";
import { IButton } from "./Button.types";
import "./Button.css";

const Button: FC<IButton> = ({
  children,
  onClick,
  className,
  variant = "filled",
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames("button", [variant], className)}
    >
      {children}
    </div>
  );
};

export default Button;
