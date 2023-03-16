import React, { useState, useEffect, FC } from "react";
import { getRooms } from "../../store/actions/rooms";
import { getRoomDetails } from "../../store/slices/rooms";
import { useAppDispatch } from "../../store/hooks";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./month.css";
import "./adaptiveMonth.css";
import { IMonth } from "./Month.types";

const Month: FC<IMonth> = ({ openSideBar, turnLoader }) => {
  const dispatch = useAppDispatch();

  const date = new Date();
  let todayDay: any = date.getDate().toString();
  let todayMonth: any = (date.getMonth() + 1).toString();
  let todayYear: any = date.getFullYear().toString();
  if (todayDay.length < 2) {
    todayDay = `0${todayDay}`;
  }
  if (todayMonth.length < 2) {
    todayMonth = `0${todayMonth}`;
  }

  useEffect(() => {
    dispatch(getRooms(todayDay, todayMonth, todayYear));
  }, []);

  const [selected, setSelected] = useState<any>("");

  let selMonth = selected && (selected.getMonth() + 1).toString();
  let selDay = selected && selected.getDate().toString();
  let selYear = selected && selected.getFullYear().toString();

  useEffect(() => {
    if (selMonth && selDay && selYear) {
      dispatch(getRooms(selDay, selMonth, selYear));
    }
  }, [selected]);

  return (
    <div>
      <Calendar
        onClickDay={(value, e) => {
          e.stopPropagation();
          setSelected(value);
          dispatch(getRoomDetails({}));
          openSideBar();
          turnLoader();
        }}
      />
    </div>
  );
};

export default Month;
