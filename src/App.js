import react, {useState} from "react";
import './css/App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function App() {
	const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
  {/*If user present then show chats*/}
    {!user ?
    	(<Login />)
    	:( <div className="app_body">
      	<Router>      	
          <Sidebar />
           <Switch>
					 <Route path="/rooms/:roomid">
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
