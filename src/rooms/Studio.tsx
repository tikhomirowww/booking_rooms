import React, { useEffect, useState, useRef } from "react";
// import { getRooms } from "../store/actions/rooms";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
// import { fetchRooms } from "../store/slices/rooms";
import { fetchRooms } from "../store/actions/rooms";

const Studio = () => {
  const dispatch = useAppDispatch();

  const veryMain: any = useRef(null);
  const main: any = useRef(null);
  const card: any = useRef(null);
  const choice: any = useRef(null);
  // console.log(booking.current);

  const handleOpen = () => {
    main.current.style.display = "block";
    veryMain.current.style.display = "none";
    console.log("open");

    // card.current.style.display = 'none'
  };

  const handleClose = () => {
    main.current.style.display = "none";
    console.log("close");
    console.log(main.current.style.display);
  };

  const rooms = useSelector((state: any) => state.rooms.roomDetails);
  let roomArr: any = Object.values(rooms);
  console.log(roomArr);

  // let studio = roomArr.filter((item: any, index: any) => (item.room == 1))
  // let ok = studio.map((item: any) => (item.start_time))
  // console.log(ok);

  // console.log(studio.length);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const handleBook = (e: any) => {
    e.stopPropagation();
    card.current.style.display = "none";
    choice.current.style.display = "block";
    // main.current.style.background = 'red'
    // console.log(card.current);

    console.log(choice.current.style.display);
  };

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const query = () => {
    // dispatch(getRooms());
    // getRooms();
  };

  let time = new Date();
  // let numDay = time.getDate();
  // let numDay = 29
  // let strDay = numDay.toString();
  // let day = strDay.length == 1 ? `0${numDay}` : numDay
  // let day2 = strDay.length == 1 ? `0${numDay + 1}` : numDay + 1
  // let day3 = strDay.length == 1 ? `0${numDay + 2}` : numDay + 2
  // let day4 = strDay.length == 1 ? `0${numDay + 3}` : numDay + 3
  // let day5 = strDay.length == 1 ? `0${numDay + 4}` : numDay + 4
  // let day6 = strDay.length == 1 ? `0${numDay + 5}` : numDay + 5
  // let day7 = strDay.length == 1 ? `0${numDay + 6}` : numDay + 6
  // let numMonth = time.getMonth();
  // let str = numMonth.toString();
  // let month = str.length == 1 ? `0${numMonth + 1}` : numMonth + 1

  // console.log('numday', numDay+1);

  let year = time.getFullYear();
  // let day = time.getDay();
  // console.log(day);

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let index = time.getDay();
  // let index = 11
  let index2 = index < 6 ? index + 1 : 0;
  let index3 = index2 < 6 ? index2 + 1 : 0;
  let index4 = index3 < 6 ? index3 + 1 : 0;
  let index5 = index4 < 6 ? index4 + 1 : 0;
  let index6 = index5 < 6 ? index5 + 1 : 0;
  let index7 = index6 < 6 ? index6 + 1 : 0;

  return (
    <div className="relative" onClick={handleOpen}>
      <div ref={main} style={{ display: "none" }} className="studio_reverse">
        <div
          ref={card}
          onClick={(e) => {
            handleClose();
            e.stopPropagation();
          }}
          className="choice"
        >
          <h1>Choose the day</h1>
          <div className="month_div">
            <ul className="month_ul">
              <li
                onClick={(e) => {
                  handleBook(e);
                  // getRooms();
                  // dispatch(getRooms());
                }}
                className="month_li"
              >
                <div>{week[index]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index2]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index3]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index4]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index5]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index6]}</div>
              </li>
              <li onClick={handleBook} className="month_li">
                <div>{week[index7]}</div>
              </li>
            </ul>
          </div>
        </div>
        <div ref={choice} className="booking">
          {/* {roomArr.map((item: any, index: any) => (
            <h1 key={index} >{item.title}</h1>
            ))} */}
          {/* <h1>{roomArr[0].title}</h1> */}
          <div className="studio_table">
            <div className="studio_head">{roomArr[2] && roomArr[2].title}</div>
            <div
              className={
                roomArr[2] && roomArr[2].ten ? "studio_busy" : "studio_cell"
              }
            >
              10:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].eleven ? "studio_busy" : "studio_cell"
              }
            >
              11:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].twelve ? "studio_busy" : "studio_cell"
              }
            >
              12:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].one ? "studio_busy" : "studio_cell"
              }
            >
              13:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].two ? "studio_busy" : "studio_cell"
              }
            >
              14:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].three ? "studio_busy" : "studio_cell"
              }
            >
              15:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].four ? "studio_busy" : "studio_cell"
              }
            >
              16:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].five ? "studio_busy" : "studio_cell"
              }
            >
              17:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].six ? "studio_busy" : "studio_cell"
              }
            >
              18:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].seven ? "studio_busy" : "studio_cell"
              }
            >
              19:00
            </div>
            <div
              className={
                roomArr[2] && roomArr[2].eight ? "studio_busy" : "studio_cell"
              }
            >
              20:00
            </div>
          </div>
        </div>
      </div>
      <div ref={veryMain} className="meeting_card">
        Studio
      </div>
    </div>
  );
};

export default Studio;
