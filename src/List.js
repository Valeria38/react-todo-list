import React from "react";
import Task from "./Task";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo) => (
        <Task
          key={todo.id}
          todo={todo}
          id={todo.id}
          handleClick={this.props.handleClick}
          onRemove={this.props.onRemove}
        />
    ))}
      <div
        className={
          this.props.stateTodos.length ? "List__footer List__show" : "List__footer"
        }
      >
      <div className="List__footer-flex-container">
        <span className="first">{this.props.todosCount} item(s) left</span>
        <div>
          <span 
            onClick={() => this.props.setFilterBy("")}
            className={this.props.filterBy === "" ? "border" : ""}
          >All </span>
          <span 
            onClick={() => this.props.setFilterBy("active")}
            className={this.props.filterBy === "active" ? "border" : ""}
          >Active </span>
          <span
            onClick={() => this.props.setFilterBy("completed")}
            className={this.props.filterBy === "completed" ? "border" : ""}
          >Completed </span>
        </div>
        <span onClick={this.props.clearCompleted}>Clear completed</span>
      </div>
      </div>
    </div>
    );
  }
}

export default List;