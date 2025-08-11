import { useState, useEffect } from "react";
import './Main.css'

type Todo = {
    item: string;
    date: number;
}

function Main(){
    const [ addItem, setAddItem ] = useState<string>("");
    const [ todo, setTodo ] = useState<Todo[]>([]);
    

    return(
        <>
            <div className="intro-prompt">
                <h4>Please use the following to add to your To Do's to the list of things to complete.</h4>
            </div>
            <div className="input-fields">
                <div className="task-input">
                    <input placeholder="task to complete" size={27}></input>
                </div>
                <div>
                <input placeholder="complete by?" size={27}></input>
                </div>
            </div>
        </>
    )
}

export default Main;