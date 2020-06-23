import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Hearth from './components/Hearth'

ReactDOM.render(
  <Router>
    <Hearth />
  </Router>,
  document.getElementById('root')
);


