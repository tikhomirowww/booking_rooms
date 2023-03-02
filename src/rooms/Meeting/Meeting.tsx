import React, { useState, FC } from "react";
import Month from "../../components/Month/Month";
import { IMeeting } from "./Meeting.types";
import close from "../../icons/close.png";

const Meeting: FC<IMeeting> = ({ set, state, openSchedule, closeSchedule }) => {
  return (
    <>
      <div
        onClick={() => {
          set("meeting");
          openSchedule();
        }}
        className="room_item_main"
      >
        <h3>Meeting</h3>
        {state === "meeting" && (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation();
                closeSchedule();
                set("");
              }}
              className="close_btn"
            >
              <img src={close} alt="" />
            </div>
            <Month />
          </>
        )}
      </div>
    </>
  );
};

export default Meeting;
