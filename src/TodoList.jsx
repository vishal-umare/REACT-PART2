import {useState } from "react";

export default function TodoList(){
        let [todos , setTodos] = useState([]);
        let [newTask, setNewTask] = useState("");

    function addNewTask(){
        setTodos([...todos , newTask]);
        setNewTask("");
    }

    function updateNewTask(event){
        setNewTask(event.target.value);
    }
    return (

        <div>
            <h1>Todo List</h1>
            <input placeholder="Add Tasks" value={newTask} onChange={updateNewTask}/> 
            <br /><br />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br />
            <hr />
            <ul>
                {
                    todos.map((todo)=>(
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}