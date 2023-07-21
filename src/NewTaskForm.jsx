import { useState } from "react"

export function NewTaskForm({onSubmit}) {
    const [newTask, setNewTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newTask === "") return
        onSubmit(newTask)
        setNewTask("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-task-form">
            <div className="form-row">
            <label htmlFor="task" >New Task</label>
            <input 
                value={newTask} 
                onChange={e => setNewTask(e.target.value)} 
                type="text" 
                id="task" 
            />
            </div>
            <button className="btn">Add Task</button>
        </form>
    )
}
