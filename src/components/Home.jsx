import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TodoInput from "./TodoInput";
import "./Home.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

var todos = [];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos,
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({ todos: [...this.state.todos, todo] });
    }

    handleRemoveTodo(index) {
        this.setState({
            todos: this.state.todos.filter(function (e, i) {
                return i !== index;
            }),
        });
    }

    render() {
        return (
            <div className="container col-12 col-md-8 col-lg-6">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My TODO List</title>
                    <meta
                        name="description"
                        content="Here is the list of things I have to do !!!"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Helmet>
                <div className="appTitle">
                    <p>What I have TODO</p>
                </div>
                <TodoInput onAddTodo={this.handleAddTodo} />
                <ul className="todoList">
                    {this.state.todos.map((todo, index) => (
                        <li className="todoListItem" key={index}>
                            <div className="content">
                                <p className="todoTitle">
                                    {todo.todoTitle}{" "}
                                    <small>
                                        <span className="todoPriority">
                                            {todo.todoPriority}
                                        </span>
                                    </small>
                                </p>
                                <p className="todoDescription">
                                    {todo.todoDescription}
                                </p>
                            </div>
                            <button
                                className="todoDeleteBtn"
                                onClick={this.handleRemoveTodo.bind(
                                    this,
                                    index
                                )}
                            >
                                <HighlightOffIcon />{" "}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
