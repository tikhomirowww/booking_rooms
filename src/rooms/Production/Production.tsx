import React, { FC } from "react";
import { Calendar } from "react-calendar";
import { IProduction } from "./Production.types";
import close from "../../icons/close.png";

const Production: FC<IProduction> = ({
  set,
  state,
  openSchedule,
  closeSchedule,
}) => {
  return (
    <div
      onClick={() => {
        set("production");
        openSchedule();
      }}
      className="room_item_main"
    >
      <h3>Production</h3>
      {state === "production" && (
        <>
          <div
            onClick={(e) => {
              e.stopPropagation();
              set("");
              closeSchedule();
            }}
            className="close_btn"
          >
            <img src={close} alt="" />
          </div>
          <Calendar />{" "}
        </>
      )}
    </div>
  );
};

export default Production;
