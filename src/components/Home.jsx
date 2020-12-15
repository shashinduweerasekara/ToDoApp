import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";

function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Task List</title>
                <meta
                    name="description"
                    content="Here is the list of things I have to do !!!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Helmet>

            <div className="Home col-12 col-md-8 col-lg-6">
                <div className="header">
                    <p>THINGS I HAVE TO DO</p>
                </div>
                <div className="features row">
                    <div className="AddTaskBtn col-4">
                        <button>Add a Task</button>
                    </div>
                    <div className="filterBtn col-4">
                        <button>Filter By</button>
                    </div>
                    <div className="sortBtn col-4">
                        <button>Sort By</button>
                    </div>
                </div>
                <div className="content">
                    <ul className="taskList">
                        <li className="row">
                            <div className="col-9">
                                <h5>HIGH</h5>
                                <h3>Go to the market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nulla corporis quia
                                    dolores placeat eveniet repudiandae.
                                </p>
                            </div>
                            <div className="buttonSet row col-3 ">
                                <button className="listIcon col-3">
                                    <DeleteForeverSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <EditSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <AssignmentTurnedInSharpIcon />
                                </button>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-9">
                                <h5>HIGH</h5>
                                <h3>Go to the market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nulla corporis quia
                                    dolores placeat eveniet repudiandae.
                                </p>
                            </div>
                            <div className="buttonSet row col-3 ">
                                <button className="listIcon col-3">
                                    <DeleteForeverSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <EditSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <AssignmentTurnedInSharpIcon />
                                </button>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-9">
                                <h5>HIGH</h5>
                                <h3>Go to the market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nulla corporis quia
                                    dolores placeat eveniet repudiandae.
                                </p>
                            </div>
                            <div className="buttonSet row col-3 ">
                                <button className="listIcon col-3">
                                    <DeleteForeverSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <EditSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <AssignmentTurnedInSharpIcon />
                                </button>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-9">
                                <h5>HIGH</h5>
                                <h3>Go to the market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nulla corporis quia
                                    dolores placeat eveniet repudiandae.
                                </p>
                            </div>
                            <div className="buttonSet row col-3 ">
                                <button className="listIcon col-3">
                                    <DeleteForeverSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <EditSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <AssignmentTurnedInSharpIcon />
                                </button>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-9">
                                <h5>HIGH</h5>
                                <h3>Go to the market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nulla corporis quia
                                    dolores placeat eveniet repudiandae.
                                </p>
                            </div>
                            <div className="buttonSet row col-3 ">
                                <button className="listIcon col-3">
                                    <DeleteForeverSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <EditSharpIcon />
                                </button>

                                <button className="listIcon col-3">
                                    <AssignmentTurnedInSharpIcon />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="completeListBtn">
                    <button>COMPLETED TASKS</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
