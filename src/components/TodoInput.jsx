import React, { Component } from "react";

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: "",
            todoDescription: "",
            todoPriority: "Low",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            todoTitle: "",
            todoDescription: "",
            todoPriority: "Low",
        });
    }

    render() {
        return (
            <div>
                <form className="todoForm" onSubmit={this.handleSubmit}>
                    <div className="formStart">
                        <div>
                            <label className="formLable">Title*</label>
                            <div>
                                <input
                                    className="formInput"
                                    name="todoTitle"
                                    type="text"
                                    value={this.state.todoTitle}
                                    onChange={this.handleInputChange}
                                ></input>
                            </div>
                        </div>
                        <div>
                            <label className="formLable">Priority</label>
                            <div>
                                <select
                                    className="formInput"
                                    name="todoPriority"
                                    value={this.state.todoPriority}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="formEnd">
                        <div>
                            <label className="formLable">Description</label>
                            <div>
                                <textarea
                                    className="formInput"
                                    name="todoDescription"
                                    maxlength="140"
                                    value={this.state.todoDescription}
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="addTodoBtn"
                            disabled={this.state.todoTitle.length < 1}
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoInput;
