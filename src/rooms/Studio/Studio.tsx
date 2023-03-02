import React, { FC } from "react";
import IStudio from "./Studio.types";
import Month from "../../components/Month/Month";
import close from "../../icons/close.png";

const Studio: FC<IStudio> = ({ set, state, openSchedule, closeSchedule }) => {
  return (
    <div
      onClick={() => {
        set("studio");
        openSchedule();
      }}
      className="room_item_main"
    >
      <h3>Studio</h3>
      {state === "studio" && (
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
          <Month />
        </>
      )}
    </div>
  );
};

export default Studio;
