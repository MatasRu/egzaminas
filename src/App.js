import './App.css';
import ShowUsers from "./pages/ShowUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ToolBar from "./components/ToolBar";
import http from "./plugins/Fetch"
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [getUsers, setUsers] = useState([])

  useEffect(() => {
    http.get('/getUsers').then(res => {
      setUsers(res.users)
    })
  }, [getUsers])

  return (
      <Router>
        <div className="mainBox">

          <ToolBar/>

          <div className="d-flex flex-j-center">

            <Switch>

              <Route exact path="/">
                <ShowUsers getUsers={getUsers} />
              </Route>

              <Route path="/CreateUser">
                <CreateUser set={setUsers}/>
              </Route>

              <Route path="/EditUser/:id">
                <EditUser getUsers={getUsers}/>
              </Route>


            </Switch>


          </div>

        </div>
      </Router>
  );
}

export default App;
