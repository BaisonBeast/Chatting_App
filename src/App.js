import react, {useState} from "react";
import './css/App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	const [User, setUser] = useState(null)
  return (
    <div className="app">
    {!User ?
    	(<Login />)
    	:( <div className="app_body">
      	<Router>
      	<Sidebar />
           <Switch>
           		<Route path="/rooms/:roomid">
           			<Chat />
           		</Route>
           		<Route path="/">
           			<Chat />
           		</Route>
           </Switch>	
      	</Router>
      </div>
    )}
     </div>
  );
}

export default App;
