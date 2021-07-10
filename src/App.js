import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "buy some milk",
      },
      {
        id: 2,
        content: "play mario kart",
      },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
