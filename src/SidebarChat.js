import React, {useState, useEffect} from 'react'
import "./css/SidebarChat.css"
import { Avatar} from '@material-ui/core';
import db from "./firebase";
import {Link} from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {

	const [seed, setSeed] = useState("")
	useEffect(() => {
		setSeed(Math.floor(Math.random()*1000));
	}, [])

	function createChat(){
		const roomName=prompt("Enter the name ")
		if(roomName)
		{
			db.collection("rooms").add({
				name: roomName
			})
		}
	}

	return !addNewChat? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat_info">
					<h2>{name}</h2>
					<p>Last message</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add New Chat</h2>
			
		</div>

	)
}

export default SidebarChat