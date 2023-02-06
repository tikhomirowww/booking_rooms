import React, { useState } from "react";

const Meeting = () => {
  const [clicked, setClicked] = useState(false);

  let time = new Date();
  // let month = time.getMonth()
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

  // console.log(index, index2, index3, index4, index5, index6, index7, index8, index9, index10, index11, index12);

  // let name = month[index]
  // console.log(name);

  return (
    <div
      className="relative"
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      {clicked ? (
        <div className="meeting_reverse">
          <h1>Choose the day</h1>
          <div className="month_div">
            <ul className="month_ul">
              <li className="month_li">{week[index]}</li>
              <li className="month_li">{week[index2]}</li>
              <li className="month_li">{week[index3]}</li>
              <li className="month_li">{week[index4]}</li>
              <li className="month_li">{week[index5]}</li>
              <li className="month_li">{week[index6]}</li>
              <li className="month_li">{week[index7]}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="meeting_card">Meeting room</div>
      )}
    </div>
  );
};

export default Meeting;
