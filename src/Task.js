import React from "react";

class Task extends React.Component {
  render() {
    const styles = {
      textDecoration: this.props.todo.done ? "line-through" : "none"
    };

    return (
      <div
        className={this.props.todo.isVisible ? "Task active" : "Task hidden"}
      >
        <span style={styles}>{this.props.todo.value}</span> &nbsp;
        <span
          className="Task__toggleState"
          onClick={() => this.props.handleClick(this.props.index)}
        >
          {this.props.todo.done ? "Undo" : "Complete"}
        </span>
        <span
          className="Task__delete"
          onClick={() => this.props.onRemove(this.props.todo, this.props.index)}
        >
          &nbsp;&nbsp; X
        </span>
      </div>
    );
  }
}

export default Task;