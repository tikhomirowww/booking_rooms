import React, { FC } from "react";
import Month from "../../components/Month/Month";
import { IMeeting } from "./Meeting.types";
import { CgCloseR } from "react-icons/cg";

const Meeting: FC<IMeeting> = ({
  set,
  state,
  openSideBar,
  closeSideBar,
  openSchedule,
  closeSchedule,
}) => {
  return (
    <>
      <div
        onClick={() => {
          set("meeting");
          openSchedule();
        }}
        className="room_item_main"
      >
        <h3>Meet</h3>
        {state === "meeting" && (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation();
                closeSchedule();
                set("");
                closeSideBar();
              }}
              className="close_btn"
            >
              <CgCloseR className="svg" />
            </div>
            <Month openSideBar={openSideBar} />
          </>
        )}
      </div>
    </>
  );
};

export default Meeting;
