import React from "react";

function NewTodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="todo-list">
      <input
        type="text"
        name="firstName"
        value={props.data.firstName}
        placeholder="Enter your first name(s)"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={props.data.lastName}
        placeholder="Enter your last name(s)"
        onChange={props.handleChange}
      />
      <br />
      <textarea
        name="todoDescription"
        value={props.data.todoDescription}
        placeholder="Type your todo description here!"
        onChange={props.handleChange}
      />
      <br />
      <label>
        <input
          type="checkbox"
          name="isDoneAlready"
          checked={props.data.isDoneAlraady}
          onChange={props.handleChange}
        />
        Done already?
      </label>

      <label>
        <input
          type="radio"
          name="priority"
          value="high"
          checked={props.data.priority === "high"}
          onChange={props.handleChange}
        />
        High priority!
      </label>

      <label>
        <input
          type="radio"
          name="priority"
          value="low"
          checked={props.data.priority === "low"}
          onChange={props.handleChange}
        />
        Low priority!
      </label>

      <label>
        Favourite color:
        <select
          style={{ marginLeft: "20px" }}
          value={props.data.favColor}
          name="favColor"
          onChange={props.handleChange}
        >
          <option value="">--Please select a color--</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
      </label>

      <p>
        {props.data.firstName} {props.data.lastName}
      </p>
      <p>{props.data.todoDescription}</p>
      <p>Is done already: {props.data.isDoneAlready ? "Yes!" : "No!"}</p>
      <p>Priority: {props.data.priority}</p>
      <p>Favourite color: {props.data.favColor}</p>
      <button>Submit</button>
    </form>
  );
}

export default NewTodoForm;
