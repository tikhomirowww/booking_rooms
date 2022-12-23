import React, { useState } from 'react';
import { createTask } from '../store/actions/tasks';
import { useAppDispatch } from '../store/hooks';

const AddTask = () => {
    const dispatch = useAppDispatch();

    const [isDate, setIsDate] = useState(false)

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState(2);
    const [status, setStatus] = useState(1)

    const addTask = () => {
        dispatch(createTask(title, text, category, 3, date, status))
        setTitle('');
        setText('');
        setDate('');
        window.location.reload()
        // setCategory('')
    }
  return (
    <div style={{width: '100%', background: '#dddddd'}}>
        <div className="add_form">
        <h2>Add new task!</h2>
        <textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Add title...' className='add_inp' />
        <textarea value={text} onChange={(e) => setText(e.target.value)}  placeholder='Add task desription...' className='add_inp' />
        <div className="extra_add">
        {!isDate && <button className='deadline_btn' onClick={() => setIsDate(!isDate)}>Set deadline!</button>}
        {isDate && <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />}
        <select value={status} onChange={(e) => setStatus(+(e.target.value))} name="priority"  id="tasks_priority">
            <option style={{display: "none"}} value="0">Priority</option>
            <option value={1}>🔥 Non-urgent</option>
            <option value={2}>🔥🔥Urgent</option>
            <option value={3}>🔥🔥🔥Extra-urgent</option>
        </select>
        </div>
        <button onClick={addTask} className='addTask_btn'>Add task</button>
        </div>
    </div>
  )
}

export default AddTask