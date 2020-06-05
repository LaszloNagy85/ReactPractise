import React from 'react';
import './App.css';
import Joke from "./components/Joke";
import Product from "./components/Product";
import TodoItem from "./components/TodoItem"

import jokesData from "./data/jokesData";
import productsData from "./data/vschoolProducts";
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
        testState : "This State worked mate!"
      }
  }
  
  render() {
    const todoComponents = todosData.map(item => 
      <TodoItem key={item.id} todo={item} />)
    return (
      <div>
        <p>Class method result: {this.state.testState}</p>
          <div className="todo-list">
            {todoComponents}
          </div>
      </div>
  );
  }
}

export default App;
