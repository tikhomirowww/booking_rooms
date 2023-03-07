import React, { FC } from "react";
import IStudio from "./Studio.types";
import Month from "../../components/Month/Month";
import { CgCloseR } from "react-icons/cg";

const Studio: FC<IStudio> = ({
  set,
  state,
  openSideBar,
  openSchedule,
  closeSchedule,
}) => {
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
            <CgCloseR className="svg" />
          </div>
          <Month openSideBar={openSideBar} />
        </>
      )}
    </div>
  );
};

export default Studio;
