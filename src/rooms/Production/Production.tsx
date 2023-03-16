import React, { FC } from "react";
import { Calendar } from "react-calendar";
import { IProduction } from "./Production.types";
import { CgCloseR } from "react-icons/cg";
import Month from "../../components/Month/Month";

const Production: FC<IProduction> = ({
  set,
  state,
  openSideBar,
  openSchedule,
  closeSchedule,
  turnLoader,
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
            <CgCloseR className="svg" />
          </div>
          <Month turnLoader={turnLoader} openSideBar={openSideBar} />
        </>
      )}
    </div>
  );
};

export default Production;
