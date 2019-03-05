import React from "react";
import Task from "./Task";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo, index) => (
        <Task
          key={index}
          todo={todo}
          handleClick={this.props.handleClick}
          index={index}
          onRemove={this.props.onRemove}
        />
    ))}
      <div
        className={
          this.props.todos.length ? "List__footer List__show" : "List__footer"
        }
      >
      <div className="List__footer-flex-container">
        <span className="first">{this.props.todosCount} item(s) left</span>
        <div>
          <span onClick={this.props.showAll}>All </span>
          <span onClick={this.props.showActive}>Active </span>
          <span onClick={this.props.showCompleted}>Completed </span>
        </div>
        <span onClick={this.props.clearCompleted}>Clear completed</span>
      </div>
      </div>
    </div>
    );
  }
}

export default List;