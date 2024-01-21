import  { useState } from 'react';
import "./AddTask.css"


function AddTask(props) {

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")

    function ClickHandler(){
        console.log("in Click Handler");
        props.createTodo(title,desc);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleDescChange(event) {
        setDesc(event.target.value)
        
    }

    return (
    <div className='box'>
        <h1>Add Task</h1>
        <div className="container">
        <div id = "input">
        <input placeholder = "Ttile" type="text" id="title" onChange ={handleTitleChange}/> <br />
        <input placeholder = "Description" type="text" id="description" onChange ={handleDescChange} />
        </div>
        <button id = "add" onClick={ClickHandler} >Add</button>
        </div>
    </div>
)}

export default AddTask;