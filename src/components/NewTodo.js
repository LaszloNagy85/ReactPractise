import React from "react";

class NewTodo extends React.Component {
    constructor() {
        super();
        this.state = {
        firstName : "",
        lastName : "",
        todoDescription : "",
        isDoneAlready : false,
        priority : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name] : checked}) :
                           this.setState({ [name] : value});
    }

    render() {
        return (
            <div className="todo-list">
                <input type="text" name="firstName" value={this.state.firstName} placeholder="Enter your first name" onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Enter your first name" onChange={this.handleChange}/>
                <br/>
                <textarea name="todoDescription" value={this.state.todoDescription} placeholder="Type your todo description here!" onChange={this.handleChange} />
                <br/>
                <label><input type="checkbox" name="isDoneAlready" checked={this.state.isDoneAlraady} onChange={this.handleChange} />
                Done already?</label>

                <label><input type="radio" name="priority" value="high" checked={this.state.priority === "high"} onChange={this.handleChange} />
                High priority!</label>

                <label><input type="radio" name="priority" value="low" checked={this.state.priority === "low"} onChange={this.handleChange} />
                Low priority!</label> 

                <p>{this.state.firstName} {this.state.lastName}</p>
                <p>{this.state.todoDescription}</p>
                <p>Is done already: {this.state.isDoneAlready ? "Yes!" : "No!"}</p>
                <p>Priority: {this.state.priority}</p>
            </div>
        )
    }

}

export default NewTodo;