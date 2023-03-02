import React, { useState } from "react";
import Studio from "../../rooms/Studio/Studio";
import Meeting from "../../rooms/Meeting/Meeting";
import Production from "../../rooms/Production/Production";
import Schedule from "../Schedule/Schedule";
import "./rooms.css";
import "../Schedule/schedule.css";

const Rooms = () => {
  const [month, setMonth] = useState("");
  const [opened, setOpened] = useState(false);

  const openSchedule = () => {
    setOpened(true);
  };

  const closeSchedule = () => {
    setOpened(false);
  };

  function render(str?: string) {
    switch (str) {
      case "meeting":
        return (
          <Meeting
            set={setMonth}
            state={month}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
          />
        );
      case "studio":
        return (
          <Studio
            set={setMonth}
            state={month}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
          />
        );
      case "production":
        return (
          <Production
            set={setMonth}
            state={month}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
          />
        );
      default:
        return (
          <>
            <Meeting
              set={setMonth}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
            />
            <Studio
              set={setMonth}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
            />
            <Production
              set={setMonth}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
            />
          </>
        );
    }
  }

  return (
    <div className="rooms_main">
      <div className="rooms_block">{render(month)}</div>
      <div className="schedule_block">
        <Schedule state={month} setOpenFunc={setOpened} isOpen={opened} />
      </div>
    </div>
  );
};

export default Rooms;
