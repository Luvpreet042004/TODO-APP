import Contain from "./Container";
import { useState } from "react";
import "./Task.css"

function Task(props) {

    const [title,setTitle] = useState(props.title)
    const [desc,setDesc] = useState(props.desc)

    function clickHandler() {
        
    }

    return(
        <div className="task">
            <div id = {"headings"}>
            <h3>{title}</h3>
            <p><b>
                {desc} 
            </b></p>
        </div>
        <button onClick={clickHandler}>Completed</button>
        </div>

    )
}

export default Task;