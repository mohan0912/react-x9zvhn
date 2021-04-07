import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import HourlyPage from "./Components/HourlyPage/HourlyPage";
import Footer from "./Components/Footer/Footer";
import { NavLink } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
          <Header />
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/"
              >
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/HourlyPage"
              >
                Hourly Page
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/HourlyPage">
            <HourlyPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
