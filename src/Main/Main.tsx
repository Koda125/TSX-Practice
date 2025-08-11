import { useState, useEffect } from "react";
import './Main.css'

type Todo = {
    item: string;
    date: number;
}

function Main(){
    const [ addItem, setAddItem ] = useState<string>("");
    const [ date, setDate ] = useState<number>()
    const [ todo, setTodo ] = useState<Todo[]>([]);
    function addToList(newItem: string, newDate: number){
        console.log("Adding to the list!")
        setTodo(prev => [
            ...prev,
            {item: newItem,
            date: newDate
            }
        ])
        console.log("Here is the list so far: ", todo)
    }

    return(
        <>
            <div className="intro-prompt">
                <h4>Please use the following to add to your To Do's to the list of things to complete.</h4>
            </div>
            <div className="input-fields">
                <div className="task-input">
                    <input placeholder="task to complete" size={27} onChange={(e)=>{setAddItem(e.target.value)}}></input>
                </div>
                <div className="complete-by-input">
                <input placeholder="complete by?" size={27} type="date" onChange={(e)=>{setDate(e.target.value)}}></input>
                </div>
                <div>
                    <button onClick={()=>{addToList(addItem, date)}}>Add to List</button>
                </div>
            </div>
            <div>
                {todo.map((newItem) => (
                    <div>
                        <p>{newItem.item}</p>
                        <p>{newItem.date}</p>
                    </div>
                ))}
               
            </div>
        </>
    )
}

export default Main;