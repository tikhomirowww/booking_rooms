import React, { useState, useEffect } from 'react';
import { getRooms } from '../store/actions/rooms';
import { useAppDispatch } from '../store/hooks';
import { useSelector } from 'react-redux';

const Rooms = () => {
  const dispatch = useAppDispatch();

  const rooms = (useSelector((state: any) => state.rooms.rooms))

  useEffect(() => {
    dispatch(getRooms())
    // rooms && rooms.map((item: any) => console.log(item)
    // )
  }, [])

  return (
    <div className='rooms_main'>
      <div className="rooms_header">Rooms</div>
      <div className="room_content">
        <div className="rooms_item">
          <div className="room_name">Meeting</div>
          <div className="room_cells">
          <div className="room_hour">10:00</div>
          <div className="room_hour">11:00</div>
          <div className="room_hour">12:00</div>
          <div className="room_hour">13:00</div>
          <div className="room_hour">14:00</div>
          <div className="room_hour">15:00</div>
          <div className="room_hour">16:00</div>
          <div className="room_hour">17:00</div>
          <div className="room_hour">18:00</div>
          <div className="room_hour">19:00</div>
          <div className="room_hour">20:00</div>
          </div>
        </div>
        <div className="rooms_item">
          <div className="room_name">Production</div>
          <div className="room_cells">
          <div className="room_hour">10:00</div>
          <div className="room_hour">11:00</div>
          <div className="room_hour">12:00</div>
          <div className="room_hour">13:00</div>
          <div className="room_hour">14:00</div>
          <div className="room_hour">15:00</div>
          <div className="room_hour">16:00</div>
          <div className="room_hour">17:00</div>
          <div className="room_hour">18:00</div>
          <div className="room_hour">19:00</div>
          <div className="room_hour">20:00</div>
          </div>
        </div>
        <div className="rooms_item">
          <div className="room_name">Studio</div>
          <div className="room_cells">
          <div className="room_hour">10:00</div>
          <div className="room_hour">11:00</div>
          <div className="room_hour">12:00</div>
          <div className="room_hour">13:00</div>
          <div className="room_hour">14:00</div>
          <div className="room_hour">15:00</div>
          <div className="room_hour">16:00</div>
          <div className="room_hour">17:00</div>
          <div className="room_hour">18:00</div>
          <div className="room_hour">19:00</div>
          <div className="room_hour">20:00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms