import React from "react";

class Task extends React.Component {
  render() {
    const styles = {
      textDecoration: this.props.todo.done ? "line-through" : "none"
    };

    const { todo, id, onRemove, handleClick } = this.props;

    return (
      <div className="Task">
        <span style={styles}>{todo.value}</span> &nbsp;
        <span
          className="Task__toggleState"
          onClick={() => handleClick(id)}
        >
          {todo.done ? "Undo" : "Complete"}
        </span>
        <span
          className="Task__delete"
          onClick={() => onRemove(todo, id)}
        >
          &nbsp;&nbsp; X
        </span>
      </div>
    );
  }
}

export default Task;