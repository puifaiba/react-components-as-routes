import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{background: "darkblue"}}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{background: "darkblue"}}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{background: "darkblue"}}
      >
        Login
      </NavLink>
    </div>
  )
}
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>This is my about component</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>
        <h1>Login Form</h1>
        <div>
          <input type="text" name="username" placeholder="Enter Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" password="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" blue="Login" />
      </form>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
)
