import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, handleShow, Modal } from 'react-bootstrap'
import { editTask } from '../JS/Actions';

export const EditTasks = ({task}) => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState(task)
  const handleEdit = ()=> {
    dispatch(editTask(task.id, newTask))
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form.Control placeholder='Edit New Task' value={newTask} onchange={(e)=> setNewTask(e.target.value)} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
      
}

