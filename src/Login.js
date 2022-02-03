import React from 'react'
import "./css/Login.css"
import {auth, provider} from "./firebase"
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";

function Login() {
	const [{}, dispatch] = useStateValue();
	
	const signIn= ()=>auth
	.signInWithPopup(provider)
	.then((result)=>{
		dispatch({
			type: actionTypes.SET_USER,
			user:result.user,
		})
		//console.log(result.user);
		localStorage.setItem("user", JSON.stringify(result.user));
	})
	.catch((error)=>alert(error.message));
	

	return (
		<div className="login">
			<div className="login_container">
				<img src="https://us.123rf.com/450wm/maxborovkov/maxborovkov1809/maxborovkov180900067/110330061-autumn-welcome-sign-with-colorful-maple-leaves-vector-background-.jpg?ver=6"
				 alt="logo" />
				<div className="login_text">
					<h2>Login to Chatting App</h2>
					<button onClick={signIn}>Sign In With Google</button>
				</div>
			</div>
		</div>
	)
}

export default Login