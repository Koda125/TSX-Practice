import { useState, useEffect } from "react";
import './Main.css'

type Todo = {
    item: string;
    date: number;
    completed: boolean;
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
            date: newDate,
            completed: false
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
                <table className="todo-table">
                    <thead>
                    <tr>
                        <th>Task to complete</th>
                        <th>Date to complete by</th>
                        <th>Completed?</th>
                        <th>Delete?</th>
                    </tr>
                    </thead>
                    {todo.map((newItem) => (
                        <tbody>
                        <tr>
                            <th>{newItem.item}</th>
                            <th>{newItem.date}</th>
                            <th 
                            //The following onclick allows the creation of a new array and verifies it to the newItem, before flipping the completed boolean.
                            onClick={()=>{setTodo(prev => prev.map(todo => todo === newItem ? { ...todo, completed: !todo.completed } : todo))}}>
                                {newItem.completed ? "✅" : "❌"}
                            </th>
                            <th>
                                <button onClick={() => setTodo(prev => prev.filter(todo => todo.date !== newItem.date))}>
                                    Delete
                                </button>
                            </th>

                        </tr>
                        </tbody>    
                                
                            
                        
                    ))}
                </table>
            </div>
        </>
    )
}

export default Main;