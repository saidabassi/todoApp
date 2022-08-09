import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import Button from "react-bootstrap/esm/Button";
const ListTasks = () => {
    const list = useSelector(state => state.listReducer.listTasks)
    const [status, setStatus] = useState("ALL")

    return (
        <div>
                            
            <Button onClick={() => setStatus("ALL")}>ALL</Button>
            <Button onClick={() => setStatus("Done")}>Done</Button>
            <Button onClick={() => setStatus("Undone")}>Undone</Button>
            {status === "Done" ?
            list.filter((el) => el.isDone === true)
            .map((el)=> <Task task={el} key={el.id} />):
            status === "Undone" ?
            list.filter(el => el.isDone === false)
            .map((el)=> <Task task={el} key={el.id} />):   
                    list.map(el => <Task task={el} key={el.id} />)}
        </div>
    )

    }

export default ListTasks