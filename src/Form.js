import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <h1 className="Form__title">todos</h1>
          <input
            className="Form__input"
            placeholder="What needs to be done?"
            value={this.props.inputValue}
            onChange={event => this.props.handleChange(event)}
          />
        </form>
      </div>
    );
  }
}
export default Form;