import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { useSelector } from 'react-redux';
import { getTasks, getTasksDetails, saveEditedTask, deleteTask, updateComplete } from '../store/actions/tasks';

const Backlog = () => {
  const dispatch = useAppDispatch()

  const tasks = useSelector((state:any) => state.tasks.tasks);
  const taskDetails = useSelector((state:any) => state.tasks.taskDetails)

  console.log(tasks?.length);
  
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [completed, setCompleted] = useState(2)

  const [taskDet, setTaskDet] = useState(taskDetails)
  const [compl , setCompl] = useState(2);
  
  // const [checked, setChecked] = useState<any>({})

  // console.log(checked)

  const getOneTaskDetails = (id: number) => {
    dispatch(getTasksDetails(id))
  }

  useEffect(() => {
    dispatch(getTasks());
    // setTaskDet(taskDetails);
    console.log(taskDetails);
  }, []);

  useEffect(() => {
    setTaskDet(taskDetails);
    dispatch(getTasks())
    console.log(taskDet);
    console.log(taskDetails);
  }, [taskDetails])

  const handleInp = (e: any) => {
    if(e.target.name == "status"){
      let obj = {
        ...taskDet,
        [e.target.name]: Number(e.target.value)
      }
      setTaskDet(obj)
    }else{
    let obj = {
      ...taskDet,
      [e.target.name]: e.target.value
    }
    setTaskDet(obj)
    }
  }

  const handleSave = () => {
    dispatch(saveEditedTask(taskDet.title, taskDet.description, taskDet.deadline, taskDet.status, 3, taskDet.id ));
    setEditModal(false)
  }

  const handleCompleted = (completed: number, id: number) => {
    dispatch(updateComplete(completed, id));
    // window.location.reload()
  }

  return (
    <>
    <div style={{width: '100%'}}>
        <div className="table">
            <div className="table_title">All tasks</div>
            {tasks && tasks.map((item: any, index: any) => (
              // <div key={index} className="rows">
              // <div className='table_items'>
              // <div className={checked[item.id] ? 'checked_items' : ''}><strong>{item.title}</strong></div>
              // {item.text && <div className={checked[item.id] ? 'checked_items' : ''}>Task description: <strong>{item.text}</strong></div>}
              // {item.date && <div className={checked[item.id] ? 'checked_items' : ''}>Deadline: <i>{item.date}</i></div>}
              <div key={index} className="rows">
              <div className='table_items'>
              <div className={item.completed == 2 ? 'checked_items' : ''}><strong>{item.title}</strong></div>
              {item.text && <div className={item.completed == 2 ? 'checked_items' : ''}>Task description: <strong>{item.text}</strong></div>}
              {item.date && <div className={item.completed == 2 ? 'checked_items' : ''}>Deadline: <i>{item.date}</i></div>}
              <div className='table_btns_backlog'>
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
            {/* <div className="table_checkboxes">
              <span>Done</span>
              <input type="checkbox" aria-label='qwert' checked={checked[item.id]} onChange={() => setChecked(checked[item.id] ? {...checked, [item.id]: !checked[item.id]} : {...checked, [item.id]: true}) }  />
            </div> */}
            <div className="table_checkboxes">
              <span>Done</span>
              <input type="checkbox" aria-label='qwert' checked={item.completed == 2 && true} 
              onChange={() => compl == 2? (handleCompleted(3 , item.id) , setCompl(3)):(
                handleCompleted(2 , item.id),
                setCompl(2)
              )}  />
            </div>
            </div>))}
            {!tasks.length && <div className='alt_table'>There are no tasks yet!</div>}
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

export default Backlog