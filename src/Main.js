import React from "react";
import Form from "./Form";
import List from "./List";

class Main extends React.Component {
  state = {
    inputValue: "",
    todos: [
      { value: "learn react", done: true, isVisible: true },
      { value: "go for a walk", done: false, isVisible: true }
    ]
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
      isVisible: true
    };

    this.setState(prevState => {
      return {
        inputValue: "",
        todos: [...prevState.todos, newTodo]
      };
    });
  };

  handleClick = index => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, i) => {
          if (index === i) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
    });
  };

  onRemove = (todo, index) => {
    this.setState(prevState => {
      prevState.todos.splice(prevState.todos.indexOf(todo), 1);
      return {
        todos: prevState.todos
      };
    });
  };

  countTodos = () => {
    const doneTodos = this.state.todos.filter(todo => todo.done);
    return this.state.todos.length - doneTodos.length;
  };

  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter(todo => !todo.done);
    this.setState({
      todos: filteredTodos
    });
  };

  showActiveOrCompleted = isActive => {
    this.setState(prevState => {
      const updatedTodos = isActive
        ? prevState.todos.map(todo => {
            if (todo.done) {
              todo.isVisible = false;
            } else {
              todo.isVisible = true;
            }
            return todo;
          })
        : prevState.todos.map(todo => {
            if (!todo.done) {
              todo.isVisible = false;
            } else {
              todo.isVisible = true;
            }
            return todo;
          });

      return {
        todos: updatedTodos
      };
    });
  };

  showAll = () => {
    this.setState(prevState => {
      const allTodos = this.state.todos.map(todo => {
        todo.isVisible = true;
        return todo;
      });
      return {
        todos: allTodos
      };
    });
  };

  render() {
    return (
      <div className="Main" onClick={this.onCountTodos}>
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List
          todos={this.state.todos}
          handleClick={this.handleClick}
          onRemove={this.onRemove}
          todosCount={this.countTodos()}
          showActive={() => this.showActiveOrCompleted(true)}
          showAll={this.showAll}
          showCompleted={() => this.showActiveOrCompleted(false)}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default Main;