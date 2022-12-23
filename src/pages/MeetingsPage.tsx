import React, { useState } from 'react'
import Friends from '../components/Friends';
import Navbar from '../components/Navbar'
import Rooms from '../components/Rooms';

const MeetingsPage = () => {
    const [friends, setFriends] = useState(false);
    const [rooms, setRooms] = useState(true);

    const turnRooms = () => {
        setFriends(false);
        setRooms(true)
    }

    const turnFriends = () => {
        setFriends(true);
        setRooms(false)
    }

  return (
    <div>
        <Navbar />
        <div className="tasks_box">
            <div className="task-header">
                <div>
                    <ul className='header_tasks_list'>
                        <li onClick={turnFriends}>Friends</li>
                        <li onClick={turnRooms}>Rooms</li>
                    </ul>
                </div>
            </div>
            <div className="task_content">
                {friends && <Friends />}
                {rooms && <Rooms />}
            </div>
        </div>
    </div>
  )
}

export default MeetingsPage