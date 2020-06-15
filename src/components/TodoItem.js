import React from "react";

function TodoItem(props) {
    const completedTodoStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "grey"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedTodoStyle : null}>{props.item.text}</p>
        </div>
    );
}

export default TodoItem;