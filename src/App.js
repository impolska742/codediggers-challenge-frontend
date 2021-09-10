import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task1 from "./components/Task 1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task 3";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/task1">
              <Task1 />
            </Route>
            <Route path="/task2">
              <Task2 />
            </Route>
            <Route path="/task3">
              <Task3 />
            </Route>
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
