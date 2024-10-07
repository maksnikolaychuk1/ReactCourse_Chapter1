import { useState } from "react";
function ToDoItem ({task, onDeleteTask, onEditTask}){
    const[isEditMode, setEditMode] = useState(false);
    const[title, setTitle] = useState(task.title);

    function handleEdit(){
        setEditMode(true);

        if (title.trim() === '') {
            alert('Поле пусте або введене невірно');
            return;
          }

        if(isEditMode){
            const toDo = {
                id: task.id,
                title: title,
            };
            
            onEditTask(toDo);
            setEditMode(false);
        }
    }

    function handleChange(event){
        setTitle(event.target.value);
    }

    return(
        <li>
        {isEditMode ? (
            <>
            <input 
            type="text" 
            value={title}
            onChange={handleChange}
            placeholder="Edit"
            />
            </>
        ) : (
            <span>{task.title}</span>
        )}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        <button onClick={handleEdit}>
        {isEditMode ? "Save" : "Edit"}
        </button>
        </li>);
}

export default ToDoItem;