import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { getRoomDetails } from "../../store/slices/rooms";
import ISchedule from "./Schedule.types";
import { fetchUsers } from "../../store/actions/user";
import { MeetingType, ProductionType, StudioType } from "./Schedule.types";
import { deleteHour, createHour } from "../../store/actions/rooms";
import { CgCloseR } from "react-icons/cg";
import { AiOutlineDownSquare } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ClockLoader } from "react-spinners";
import { InfinitySpin } from "react-loader-spinner";
import "./adaptiveSchedule.css";
import "./schedule.css";

const Schedule: FC<ISchedule> = ({
  state,
  setOpenFunc,
  isOpen,
  sideBar,
  closeSideBar,
  loader,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const rooms = useSelector((state: any) => state.rooms.roomDetails);
  let roomArr = Object.values(rooms);

  const users = useSelector((state: any) => state.user.users);

  let meeting = roomArr.filter(
    (item: any) => item.title == "Meeting"
  ) as MeetingType[];
  let studio = roomArr.filter(
    (item: any) => item.title == "Studio"
  ) as StudioType[];
  let production = roomArr.filter(
    (item: any) => item.title == "Production"
  ) as ProductionType[];

  let room: MeetingType[] | StudioType[] | ProductionType[] = [];

  switch (state) {
    case "meeting":
      room = meeting;
      break;
    case "studio":
      room = studio;
      break;
    case "production":
      room = production;
  }

  const findName = (id: any) => {
    let foundUserObj = users.find((item: any) => item.id == id);
    return foundUserObj;
  };
  const ten = () => {
    if (room[0].ten) {
      room[0] = { ...room[0], ten: findName(room[0].ten).username };
      return room[0];
    }
  };

  const eleven = () => {
    if (room[0] && room[0].eleven) {
      room[0] = { ...room[0], eleven: findName(room[0].eleven).username };
      return room[0];
    }
  };

  const twelve = () => {
    if (room[0] && room[0].twelve) {
      room[0] = { ...room[0], twelve: findName(room[0].twelve).username };
      return room[0];
    }
  };

  const one = () => {
    if (room[0] && room[0].one) {
      room[0] = { ...room[0], one: findName(room[0].one).username };
      return room[0];
    }
  };

  const two = () => {
    if (room[0] && room[0].two) {
      room[0] = { ...room[0], two: findName(room[0].two).username };
      return room[0];
    }
  };

  const three = () => {
    if (room[0] && room[0].three) {
      room[0] = { ...room[0], three: findName(room[0].three).username };
      return room[0];
    }
  };

  const four = () => {
    if (room[0] && room[0].four) {
      room[0] = { ...room[0], four: findName(room[0].four).username };
      return room[0];
    }
  };

  const five = () => {
    if (room[0] && room[0].five) {
      room[0] = { ...room[0], five: findName(room[0].five).username };
      return room[0];
    }
  };

  const six = () => {
    if (room[0] && room[0].six) {
      room[0] = { ...room[0], six: findName(room[0].six).username };
      return room[0];
    }
  };

  const seven = () => {
    if (room[0] && room[0].seven) {
      room[0] = { ...room[0], seven: findName(room[0].seven).username };
      return room[0];
    }
  };

  const eight = () => {
    if (room[0] && room[0].eight) {
      room[0] = { ...room[0], eight: findName(room[0].eight).username };
      return room[0];
    }
  };

  const changeRoom = () => {
    for (let key in room[0]) {
      switch (key) {
        case "ten":
          ten();
          break;
        case "eleven":
          eleven();
          break;
        case "twelve":
          twelve();
          break;
        case "one":
          one();
          break;
        case "two":
          two();
          break;
        case "three":
          three();
          break;
        case "four":
          four();
          break;
        case "five":
          five();
          break;
        case "six":
          six();
          break;
        case "seven":
          seven();
          break;
        case "eight":
          eight();
          break;
      }
    }
  };
  changeRoom();

  const [hour, setHour] = useState("");
  const [del, setDel] = useState("");

  const addHour = (item: any) => {
    dispatch(createHour(room[0].id, item.hour));
    setHour(item.hour);

    setTimeout(() => {
      setHour("");
    }, 1000);
  };

  const removeHour = (item: any) => {
    dispatch(deleteHour(room[0].id, item.hour));
    setDel(item.hour);

    setDel("");
  };

  const oneRoom = room[0] || {};

  const li = [
    {
      text: "10:00",
      hour: "ten",
      user: oneRoom.ten,
    },
    {
      text: "11:00",
      hour: "eleven",
      user: oneRoom.eleven,
    },
    {
      text: "12:00",
      hour: "twelve",
      user: oneRoom.twelve,
    },
    {
      text: "13:00",
      hour: "one",
      user: oneRoom.one,
    },
    {
      text: "14:00",
      hour: "two",
      user: oneRoom.two,
    },
    {
      text: "15:00",
      hour: "three",
      user: oneRoom.three,
    },
    {
      text: "16:00",
      hour: "four",
      user: oneRoom.four,
    },
    {
      text: "17:00",
      hour: "five",
      user: oneRoom.five,
    },
    {
      text: "18:00",
      hour: "six",
      user: oneRoom.six,
    },
    {
      text: "19:00",
      hour: "seven",
      user: oneRoom.seven,
    },
    {
      text: "20:00",
      hour: "eight",
      user: oneRoom.eight,
    },
  ];

  return (
    <>
      {sideBar && (
        <div
          onClick={() => {
            closeSideBar();
            dispatch(getRoomDetails({}));
          }}
          style={{ display: "none" }}
          className="modal_bg"
        ></div>
      )}
      <div className={`schedule_table ${sideBar ? "sidebar" : ""}`}>
        <div className="table_head">
          {" "}
          <div
            className="svg_container"
            onClick={() => {
              setOpenFunc((pre: boolean) => !pre);
              closeSideBar();
              dispatch(getRoomDetails({}));
            }}
          >
            {isOpen ? (
              <CgCloseR className="svg" />
            ) : (
              <AiOutlineDownSquare className="svg" />
            )}
          </div>
          <h3>Schedule</h3>
        </div>
        {loader ? (
          <div className="loader">
            <InfinitySpin width="200" color="black" />
          </div>
        ) : (
          <div
            className={`accordion-content ${isOpen || sideBar ? "opened" : ""}`}
          >
            {li.map((item: any) => (
              <div key={item.hour} className="hour_item">
                <div className="text_item">
                  <h3>{item.text}</h3>
                  {item.hour == hour ? (
                    <ClockLoader size={30} />
                  ) : item.user ? (
                    <div className="user">{item.user}</div>
                  ) : (
                    <IoIosAddCircleOutline
                      onClick={() => {
                        addHour(item);
                      }}
                      className="svg"
                    />
                  )}
                </div>
                {item.hour == del ? (
                  <ClockLoader size={30} />
                ) : item.user ? (
                  <RiDeleteBin6Line
                    className="svg"
                    onClick={() => {
                      removeHour(item);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;
