import {useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
        let [todos , setTodos] = useState([{task: "sample" , id: uuidv4() , isDone: false,}]);
        let [newTask, setNewTask] = useState("");

    function addNewTask(){
        setTodos( (prevTodos)=>{
            return ([...prevTodos, {task: newTask , id: uuidv4()}])
        });
        setNewTask("");
    }

    function updateNewTask(event){
        setNewTask(event.target.value);
    }

    function deleteTask(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function upperCaseAll(){
        setTodos(
        todos.map((todo)=>{
            return{
                ...todo, task: todo.task.toUpperCase()
            };
        })
    )}
    
    function upperCaseOne(id){
        setTodos(
        todos.map((todo)=>{
           if(todo.id === id){
             return{
                ...todo, task: todo.task.toUpperCase()
            }
           }
           else{
            return todo ;
           }
        })
    )}

    function markAsDone(id){
        setTodos(
        todos.map( (todo) =>{
            if(todo.id == id){
                return {
                    ...todo, isDone:true 
                }

            }
            else{
                return todo ;
            }
        })
    )}

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
                        <li key={todo.id}>

                            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {} }>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=> deleteTask(todo.id)}>Delete</button>

                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => {upperCaseOne(todo.id)}}>UpperCase</button>

                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => {markAsDone(todo.id)}}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}
