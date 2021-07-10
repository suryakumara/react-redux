import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";

import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <InputLabel>Add new todo</InputLabel>
          <Input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
