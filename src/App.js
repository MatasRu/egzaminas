import './App.css';
import ShowUsers from "./pages/ShowUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ToolBar from "./components/ToolBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="main-box">

          <ToolBar/>

          <div className="d-flex flex-center">

            <Switch>

              <Route exact path="/">
                <ShowUsers />
              </Route>

              <Route path="/CreateUser">
                <CreateUser/>
              </Route>

              <Route path="/EditUser">
                <EditUser/>
              </Route>


            </Switch>


          </div>

        </div>
      </Router>
  );
}

export default App;
