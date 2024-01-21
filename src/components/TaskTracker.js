import React from 'react'

import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const TaskTracker = ({text, updateMode, deleteTask}) => {
  return (
    <div className="tasktracker">

      <div className="text">{text}</div>

      <div className="icons">
      <BiEdit className='icon' onClick={updateMode} />
      <AiFillDelete className='icon' onClick={deleteTask} />
      </div>

    </div>
  )
}

export default TaskTracker