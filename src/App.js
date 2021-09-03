import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task1 from "./components/Task 1";

function App() {
  return (
    <>
      <Router>
        <div>
          <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="/" class="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="/task1" class="nav-link" aria-current="page">
                  Task 1
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Task 2
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Task 3
                </a>
              </li>
            </ul>
          </header>

          <Switch>
            <Route path="/task1">
              <Task1 />
            </Route>
            <Route path="/task2"></Route>
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
