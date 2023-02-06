import React, { useEffect, useState, useRef } from 'react'
import { getMates } from '../store/actions/friends';
import { addMates } from '../store/actions/friends';
import { useAppDispatch } from '../store/hooks';
import { useSelector } from 'react-redux';

const Friends = () => {
  const dispatch = useAppDispatch();

  const ref: any = useRef(null);

  const handleOpen = () => {
    ref.current.style.display = "flex"
  } 

  const friends = (useSelector((state: any) => state.friends.friends));
  console.log(friends);
  
  const [person, setPerson] = useState('');

  const addFriend = () => {
    dispatch(addMates({person}))
  }

  useEffect(() => {
    dispatch(getMates())
  }, [])

  return (
    <div className='main_friends'>
      <div className="friends-list">
        {/* <div className="add_friend">
          <input value={person} onChange={(e) => setPerson(e.target.value)} type="text" placeholder='friend name' />
          <button onClick={addFriend}>Add friend</button>
        </div> */}

        <div className="friend_head">Your friends:</div>
        {friends && friends.map((item: any, index: any) => (
          <div key={index}>{item.username}: {item.id}</div>
        ))}
      </div>
      <div className="add_friend">
        <button>Add Friend</button>
        <div style={{display: 'none'}} className="modal_add_friend">
          hello
        </div>
      </div>
    </div>
  )
}

export default Friends