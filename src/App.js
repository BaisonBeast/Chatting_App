import './css/App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="app_body">
      	<Router>
           <Switch>
           		<Route path="/rooms/:roomid">
           			<Chat />
           		</Route>
           		<Route path="/">
           			<Sidebar />
           			<Chat />
           		</Route>
           </Switch>	
      	</Router>
      </div>
    </div>
  );
}

export default App;
