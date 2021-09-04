import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task1 from "./components/Task 1";
import Task2 from "./components/Task2";

function App() {
  return (
    <>
      <Router>
        <div>
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/task1" className="nav-link" aria-current="page">
                  Task 1
                </a>
              </li>
              <li className="nav-item">
                <a href="/task2" className="nav-link">
                  Task 2
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Task 3
                </a>
              </li>
            </ul>
          </header>

          <Switch>
            <Route path="/task1">
              <Task1 />
            </Route>
            <Route path="/task2">
              <Task2 />
            </Route>
            <Route path="/task3"></Route>
          </Switch>

          <footer
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "700",
              margin: "10px",
            }}
          >
            Made By Vaibhav Bhardwaj
            <br />
            Checkout the Github Repo{" "}
            <a href="https://github.com/impolska742/codediggers-challenge-frontend">
              Here
            </a>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
