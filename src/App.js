import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import NewTodo from "./components/NewTodo";
// import todosData from "./data/todosData";

// import Product from "./components/Product";
// import Joke from "./components/Joke";
// import jokesData from "./data/jokesData";
// import productsData from "./data/vschoolProducts";

// function App() {
//   const jokeComponents = jokesData.filter(joke => joke.question !== null &&  joke.question ? (joke.question.length > 50): false)
//     .map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

//   const productComponents = productsData.map(item =>
//       <Product key={item.id} item={item} />)

//   const todoComponents = todosData.map(item =>
//       <TodoItem key={item.id} todo={item} />)

//   return (
//       <div>
//           {/* {jokeComponents} */}
//           {/* {productComponents} */}
//           <div className="todo-list">
//             {todoComponents}
//           </div>

//       </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isLoading: true,
      isLoggedIn: false,
      userName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.jsonbin.io/b/5ee71a54ccc9877ac37bc396")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          todos: data || [],
        });
      });
  }

  handleUserNameInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return { todos: updatedTodos };
    });
  }

  handleClick() {
    this.setState((prevState) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }

  render() {
    let todoItems = this.state.isLoading
      ? []
      : this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            handleChange={this.handleChange}
          />
        ));
    let textForLogin = this.state.isLoggedIn ? "You are logged in as " + this.state.userName + "!" : "You are not logged in! Please enter your name: ";
    let buttonText = this.state.isLoggedIn ? "Log out!" : "Log in!";
    let todosListing = this.state.isLoading ? "Loading data! Please wait!" : todoItems;
    let loginInputField = this.state.isLoggedIn ? null : (
      <input
        type="text"
        className="user-name-input-field"
        name="userName"
        value={this.state.userName}
        placeholder="Your username here!"
        onChange={this.handleUserNameInput} 
      />
    );

    return (
      <div>
        <div className="App-header">
          Todo App
          <div className="login-text">{textForLogin}</div>
          {loginInputField}
          <button onClick={this.handleClick} className="login-button">
            {buttonText}
          </button>
        </div>
        <div className="todo-list">{todosListing}</div>
        <NewTodo handleNewTodo={this.handleNewTodo}/>
      </div>
    );
  }
}

export default App;
