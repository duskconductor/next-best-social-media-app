import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;