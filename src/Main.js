import React from "react";
import Form from "./Form";
import List from "./List";

class Main extends React.Component {
  state = {
    inputValue: "",
    todos: [
      { value: "learn react", done: true, id: 1 },
      { value: "go for a walk", done: false, id: 2 }
    ],
    filterBy: ""
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.inputValue) {
      return;
    }

    const newTodo = {
      value: this.state.inputValue,
      done: false,
      id:this.state.todos.length + 1
    };

    this.setState(prevState => {
      return {
        inputValue: "",
        todos: [...prevState.todos, newTodo]
      };
    });
  };

  handleClick = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (id === todo.id) {
          todo.done = !todo.done;
        }
        return todo;
      });

      return {
        todos: updatedTodos
      };
    });
  };

  onRemove = (todo, id) => {
    const updatedTodos = [...this.state.todos].filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: updatedTodos
    });
  };

  countTodos = () => {
    const activeTodos = this.state.todos.filter(todo => !todo.done);
    return activeTodos.length;
  };

  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter(todo => !todo.done);
    this.setState({
      todos: filteredTodos
    });
  };

  setFilterBy = filterBy => {
    this.setState({
      filterBy: filterBy
    });
  };

  getVisibleTodos = () => {
    let filteredTodos = this.state.todos;

    if (this.state.filterBy === "active") {
      filteredTodos = filteredTodos.filter(todo => !todo.done);
    } else if (this.state.filterBy === "completed") {
      filteredTodos = filteredTodos.filter(todo => todo.done);
    }

    return filteredTodos;
  };

  render() {
    let filteredTodos = this.getVisibleTodos();
    let todosAmount = this.countTodos();

    return (
      <div className="Main" onClick={this.onCountTodos}>
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List
         setFilterBy={this.setFilterBy}
         filterBy={this.state.filterBy}
          todos={filteredTodos}
          handleClick={this.handleClick}
          onRemove={this.onRemove}
          todosCount={todosAmount}
          clearCompleted={this.clearCompleted}
          stateTodos={this.state.todos}
        />
      </div>
    );
  }
}

export default Main;