import React, { useState, useEffect, FC } from "react";
// import { getRooms } from "../store/actions/rooms";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
import Studio from "../rooms/Studio";
import Meeting from "../rooms/Meeting";
import Production from "../rooms/Production";
import { connect } from "http2";

const Rooms: FC = () => {
  const dispatch = useAppDispatch();

  const rooms = useSelector((state: any) => state.rooms.roomDetails);

  let time = rooms.start_time;
  time = time?.split(":");

  let roomArr = Object.values(rooms);
  // roomArr.push(rooms)

  console.log(roomArr);

  const [meeting, setMeeting] = useState(false);
  const [production, setProduction] = useState(false);
  const [studio, setStudio] = useState(false);

  roomArr &&
    roomArr.map((item: any) => {
      const date = item.date;
      // const dateArr = date.split("-");
      // const day = dateArr[2]
      // const month = dateArr[1]
      // month == "01" && setJanuary(item)
      // console.log(january);
    });

  // setTimeout(() => {
  //   const [hours, minutes] = time;
  //   console.log(hours, minutes);

  // }, 500)

  // useEffect(() => {
  //   dispatch(getRooms());
  // }, [])
  // let rooms1 = [
  //   {
  //     id: 1,
  //     name: "Studio ",
  //   },
  //   {
  //     id: 2,
  //     name: "Meeting",
  //   },
  //   {
  //     id: 3,
  //     name: "Production ",
  //   },
  // ];

  return (
    <>
      <Studio />
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => setStudio(!studio)}
            className={studio ? "studio_clicked" : "studio_item"}
          >
            Studio
          </div>
          <div
            onClick={() => setMeeting(!meeting)}
            className={meeting ? "meeting_clicked" : "meeting_item"}
          >
            Meeting
          </div>
          <div
            onClick={() => setProduction(!production)}
            className={production ? "production_clicked" : "production_item"}
          >
            Production
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
