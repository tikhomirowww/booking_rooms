import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/hooks';
import { getTasks, getTasksDetails, saveEditedTask, deleteTask } from '../store/actions/tasks';

const ActiveTasks = () => {
  const dispatch = useAppDispatch();

  const tasks = useSelector((state:any) => state.tasks.tasks);
  const taskDetails = useSelector((state:any) => state.tasks.taskDetails)

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [taskDet, setTaskDet] = useState(taskDetails);

  const getOneTaskDetails = (id: number) => {
    dispatch(getTasksDetails(id))
  }

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  // useEffect(() => {
  //   setTaskDet(taskDetails);
  //   dispatch(getTasks())
  // }, [taskDetails])

  useMemo(() => {
    setTaskDet(taskDetails);
    dispatch(getTasks())
  }, [taskDetails])



  const handleInp = (e: any) => {
    let obj = {
      ...taskDet,
      [e.target.name]: e.target.value
    }
    setTaskDet(obj)
  }

  const handleSave = () => {
    dispatch(saveEditedTask(taskDet.title, taskDet.description, taskDet.deadline, taskDet.status, taskDet.completed, taskDet.id ));
    setEditModal(false)
  }

  return (
    <>
    <div style={{width: '100%'}}>
      <div className="table">
        <div className="table_title">Active tasks</div>
        {tasks && tasks.map((item: any, index: any) => (
          (item.completed == 2 || item.completed == 3) &&
          <div key={index} className="rows">
            <div className="table_items">
              <div><strong>{item.title}</strong></div>
            </div>
            <div className='table_btns'>
              <button onClick={() => 
                {getOneTaskDetails(item.id);
                setModal(!modal)}}>Info</button>

              <button onClick={() => 
              {getOneTaskDetails(item.id);
              setEditModal(!editModal)
              }}>Edit task</button>

              <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
            </div>

          </div>
        ))}
        {taskDetails && 
            modal &&
            <div className='modal_details'>
              <h3>{taskDetails.title}</h3>
              {taskDetails.description && <div>Description: {taskDetails.description}</div>}
              {taskDetails.deadline && <div>Deadline: {taskDetails.deadline}</div>}
              {taskDetails.status && <div>Urgency: {taskDetails.status == 1 ? "Non-urgent🔥" : taskDetails.status == 2 ? "Urgent🔥🔥" : "Extra-urgent🔥🔥🔥"}</div>}
              {taskDetails.completed && <div>Status: {taskDetails.comleted == 1 ? "Active" : taskDetails.completed == 2 ? "Completed" : "Uncompleted"}</div>}
              </div>
              }
            {taskDetails &&
            editModal &&
            <div className='modal_details'>
              <h3>Edit task</h3>
            <div className="details_inp">
              <div className="input_desc">Task title</div>
              <input placeholder='title...' type="text" name='title' value={taskDet.title} onChange={handleInp} /></div>
            <div className="details_inp">
              <div className="input_desc">Task description</div>
              <input placeholder='description...' type="text" name='description' value={taskDet.description} onChange={handleInp} /></div>
            <div className="details_inp">
              <div className="input_desc">Status</div>
              <select onChange={handleInp} name="status">
              <option disabled selected={taskDet.status}>{taskDet.status == 1 ? "Non-urgent" : taskDet.status == 2 ? "Urgent🔥🔥" : "Extra-urgent🔥🔥🔥"}</option>
              <option value={1}>Non-urgent</option>
              <option value={2}>Urgent🔥🔥</option>
              <option value={3}>Extra-urgent🔥🔥🔥</option>
            </select></div>
            <div className="details_inp">
              <div className="input_desc">Deadline</div>
              <input name='deadline' type="date" value={taskDet.deadline} onChange={handleInp} />
            </div>
            <button onClick={handleSave}>Save</button>
            {/* <input type="text" name='status' value={taskDet.status} onChange={handleInp} /> */} 
            </div>}
      </div>
    </div>
             {modal && <div onClick={() => setModal(false)} className="modal_bg_tasks"></div>} 
             {editModal && <div onClick={() => setEditModal(false)} className="modal_bg_tasks"></div>} 
    </>
  )
}

export default ActiveTasks