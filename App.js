import React,{ Component }  from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import logo from './logo.jpg';


//Components

import TodoList from "./components/todo.list.component";
import EditTodo from "./components/editlist.component";
import CreateTodo from "./components/create.todo.component";

class App extends Component {
  render() {
    return (
            <Router>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className=" navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
            </div>
            </nav>
            <br/>
            <Route exact path="/" component={TodoList}></Route>
            <Route exact path="/edit/:id" component={EditTodo}></Route>
            <Route exact path="/create" component={CreateTodo}></Route>
            </div>
            </Router>
    );
  }
}export default App;
