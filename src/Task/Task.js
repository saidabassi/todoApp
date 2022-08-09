import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../JS/Actions";
import './Task.css'


const Task = ({ task }) => {
    const dispatch = useDispatch();
    

  return (
    <div className="task-container">
      <span className={task.isDone ? "done" : null}> {task.text}</span>
      <Button variant="primary" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
      <Button variant="primary" onClick={()=>dispatch(doneTask(task.id)) } >{task.isDone ? "undone" : "done"}</Button>
    </div>
  );
};
export default Task;
