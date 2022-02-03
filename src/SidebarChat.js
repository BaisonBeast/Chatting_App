import React, {useState, useEffect} from 'react'
import "./css/SidebarChat.css"
import { Avatar} from '@material-ui/core';
import db from "./firebase";
import {Link} from "react-router-dom";
import firebase from "firebase";

function SidebarChat({id, name, addNewChat}) {

	const [seed, setSeed] = useState("");
	const [messages, setMessages]= useState("")

	useEffect(() => {
		setSeed(Math.floor(Math.random()*1000));
	}, [])

	useEffect(() => {
		if(id){
			db.collection("rooms").doc(id).collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot)=>
				setMessages(snapshot.docs.map((doc)=>
					doc.data()))
				);
		}

	}, [id])

	function deleteItem(event){
		var cityRef = db.collection('rooms').doc(id);
		var removeCapital = cityRef.update({
		    capital: firebase.firestore.FieldValue.delete()
		});
		db.collection('rooms').doc(id).delete();
		{window.location.href='/'}

	}

	return !addNewChat? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat_info">
					<h2>{name}</h2>
					<h3>{messages[0]?.message}</h3>
				</div>
				<a href="#" class="btn" onClick={deleteItem}>Delete</a>
			</div>
		</Link>
	) : (
		
			<Link to="/" />
		)
}

export default SidebarChat
