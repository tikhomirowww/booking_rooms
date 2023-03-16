import React, { useState } from "react";
import Studio from "../../rooms/Studio/Studio";
import Meeting from "../../rooms/Meeting/Meeting";
import Production from "../../rooms/Production/Production";
import Schedule from "../Schedule/Schedule";
import "./rooms.css";
import "../Schedule/schedule.css";
import "./adaptiveRooms.css";

const Rooms = () => {
  const [month, setMonth] = useState("");
  const [opened, setOpened] = useState(false);

  const openSchedule = () => {
    setOpened(true);
    console.log("opened");
  };

  const closeSchedule = () => {
    setOpened(false);
  };

  // sidebar state
  const [openedSideBar, setOpenedSideBar] = useState(false);

  const openSideBar = () => {
    setOpenedSideBar(true);
    console.log("open sidebar");
  };

  const closeSideBar = () => {
    setOpenedSideBar(false);
  };

  //loading
  const [loader, setLoader] = useState(false);
  console.log(loader, "loader");

  const turnLoader = () => {
    setLoader(true);
    console.log(loader, "loader first");

    setTimeout(() => {
      setLoader(false);
      console.log(loader);
    }, 1500);
  };

  function render(str?: string) {
    switch (str) {
      case "meeting":
        return (
          <Meeting
            set={setMonth}
            state={month}
            openSideBar={openSideBar}
            closeSideBar={closeSideBar}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
            turnLoader={turnLoader}
          />
        );
      case "studio":
        return (
          <Studio
            set={setMonth}
            state={month}
            openSideBar={openSideBar}
            closeSideBar={closeSideBar}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
            turnLoader={turnLoader}
          />
        );
      case "production":
        return (
          <Production
            set={setMonth}
            state={month}
            openSideBar={openSideBar}
            closeSideBar={closeSideBar}
            openSchedule={openSchedule}
            closeSchedule={closeSchedule}
            turnLoader={turnLoader}
          />
        );
      default:
        return (
          <>
            <Meeting
              set={setMonth}
              openSideBar={openSideBar}
              closeSideBar={closeSideBar}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
              turnLoader={turnLoader}
            />
            <Studio
              set={setMonth}
              openSideBar={openSideBar}
              closeSideBar={closeSideBar}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
              turnLoader={turnLoader}
            />
            <Production
              set={setMonth}
              openSideBar={openSideBar}
              closeSideBar={closeSideBar}
              openSchedule={openSchedule}
              closeSchedule={closeSchedule}
              turnLoader={turnLoader}
            />
          </>
        );
    }
  }

  return (
    <div className="rooms_main">
      <div className="rooms_block">{render(month)}</div>
      <div className="schedule_block">
        <Schedule
          state={month}
          sideBar={openedSideBar}
          closeSideBar={closeSideBar}
          setOpenFunc={setOpened}
          isOpen={opened}
          loader={loader}
        />
      </div>
    </div>
  );
};

export default Rooms;
