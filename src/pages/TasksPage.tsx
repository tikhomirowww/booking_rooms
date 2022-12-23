import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ActiveTasks from '../components/ActiveTasks';
import AddTask from '../components/AddTask';
import Backlog from '../components/Backlog';
import Completed from '../components/Completed';
import Incompleted from '../components/Incompleted';
import Navbar from '../components/Navbar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
// import TasksHeader from '../components/TasksHeader'



const TasksPage = () => {
  const dispatch = useAppDispatch()

  const ref: any = useRef()

    const [active, setActive] = useState(false);
    const [backlog, setBacklog] = useState(true);
    const [add, setAdd] = useState(false);
    const [comleted, setCompleted] = useState(false);
    const [incomleted, setIncompleted] = useState(false);

    const turnActive = () => {
      setActive(true);
      setBacklog(false);
      setAdd(false);
      setCompleted(false);
      setIncompleted(false);
    }

    const turnBacklog = () => {
      setBacklog(true);
      setActive(false);
      setAdd(false);
      setCompleted(false);
      setIncompleted(false);
    }

    const turnAdd = () => {
      setAdd(true);
      setBacklog(false);
      setActive(false);
      setCompleted(false);
      setIncompleted(false);
    }

    const turnCompleted = () => {
      setCompleted(true);
      setBacklog(false);
      setActive(false);
      setAdd(false);
      setIncompleted(false);
    }

    const turnIncompleted = () => {
      setIncompleted(true);
      setBacklog(false);
      setActive(false);
      setAdd(false);
      setCompleted(false);
    }

    const hahdleColor = () => {
      ref.current.style.color = "red"
    }
    

  return (
    <div style={{position: 'relative'}}>
        <Navbar />
        <div className="tasks_box">
          <div className="task-header">
          <div>
        <ul className='header_tasks_list'>
            <li ref={ref} onClick={() => {turnActive(); hahdleColor()}}>Active</li>
            <li ref={ref} onClick={() => {turnBacklog(); hahdleColor()}}>Backlog</li>
            <li ref={ref} onClick={() => {turnAdd(); hahdleColor()}}>Add</li>
            <li ref={ref} onClick={() => {turnCompleted(); hahdleColor()}}>Completed</li>
            <li ref={ref} onClick={() => {turnIncompleted(); hahdleColor()}}>Incomplete</li>
        </ul>
    </div>
          </div>
          <div className="task_content">
            {/* <img src="https://avatars.mds.yandex.net/i?id=e0f01058026675c4527b85c19ca34306fc4471d5-6604900-images-thumbs&n=13" alt="" /> */}
           {active && <ActiveTasks />} 
           {backlog &&  <Backlog />}
           {add && <AddTask />}
           {comleted && <Completed />}
           {incomleted && <Incompleted /> }
          </div>
        </div>
    </div>
  )
}

export default TasksPage