import React from "react";
import "./App.css";
// import Joke from "./components/Joke";
// import Product from "./components/Product";
import TodoItem from "./components/TodoItem";

// import jokesData from "./data/jokesData";
// import productsData from "./data/vschoolProducts";
import todosData from "./data/todosData";

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
      todos : todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo;
      })
      return { todos : updatedTodos };
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo =>
      <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
