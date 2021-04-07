import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import HourlyPage from './Components/HourlyPage/HourlyPage';
import Footer from'./Components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Switch>
        <Route path="/HourlyPage">
          <HourlyPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
     <Footer /> 
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
