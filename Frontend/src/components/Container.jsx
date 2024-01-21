import AddTask from "./AddTask";
import Task from "./Task";
import { useState } from "react";
import "./Container.css"

function GetTodo(task,setTask) {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todo');
        const data = await response.json();
        setTask(data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
}

function Contain() {

    const [task,setTask] = useState([]);
    GetTodo(task,setTask);

    const handleCreateTodo = async (title, desc) => {
  try {
    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": title,
        "description": desc,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create todo');
    }

    // Optionally handle the response, e.g., show a success message
    console.log('Todo created successfully');
  } catch (error) {
    console.log(error);
  }
  GetTodo(task, setTask);
};

    function CreateTask(obj) {
        return (
            <Task title = {obj.title} desc = {obj.description} ></Task>
        )
    }

    return (
        <>
        <AddTask id ="addtask" todo = {task} setTodo = {setTask} createTodo = {handleCreateTodo}></AddTask>
        {task.map(CreateTask)}
        </>
    )
}

export default Contain;