import React from 'react'
import "./css/Login.css"
import {auth, provider} from "./firebase"

function Login() {

	
		const signIn= ()=>auth
		.signInWithPopup(provider)
		.then((result)=>console.log(result))
		.catch((error)=>alert(error.message));
	

	return (
		<div className="login">
			<div className="login_container">
				<img src="https://i0.wp.com/rayhaber.com/wp-content/uploads/2021/01/whatsapp-web-nasil-acilir-whatsapp-web-nasil-kullanilir.jpg?resize=678%2C381&ssl=1"
				 alt="Whatsapp logo" />
				<div className="login_text">
					<h2>Login to Whatsapp</h2>
					<button onClick={signIn}>Sign In With Google</button>
				</div>
			</div>
		</div>
	)
}

export default Login