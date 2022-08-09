import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions";
 

export const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault()
        if (text) {
            dispatch(addTask({ id: Math.random(), text, isDone: false }))
        }
        else {
            alert("cannot enter an empty task")
        }
}
    return (
        <div>
            <Form onSubmit={handleAdd}>
                <Form.Control placeholder="Enter Task Title" onChange={(e)=> setText (e.target.value)} />
                <Button variant="primary" type="submit" onClick={handleAdd} >ADD</Button>
          
            </Form>       
  </div>
    )

      
   
}