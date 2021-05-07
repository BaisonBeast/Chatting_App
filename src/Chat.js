import React, {useState, useEffect} from 'react'
import "./css/Chat.css"
import { Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import {useParams} from "react-router-dom";
import db from "./firebase";

function Chat() {
	const [seed, setSeed] = useState("");
	const [inputVal, setinputVal]= useState("");
	const {roomid}= useParams();
	const [roomName, setRoomName]= useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random()*1000));
	}, []);

	useEffect(() =>{
		if(roomid){
			db.collection("rooms").doc(roomid)
			.onSnapshot((snapshot)=>setRoomName(snapshot.data().name));
		}
	})

	function handleClick(event){
		event.preventDefault();
		console.log(inputVal)
		setinputVal("");
	}

	function handleChange(event){
		setinputVal(event.target.value);
	}


	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				
				<div className="chat_header_info">
					<h3>{roomName}</h3>
					<p>Last seen ...</p>
				</div>

				<div className="chat_header_right">
					<IconButton>
						<SearchIcon />
						</IconButton>
						<IconButton>
						<AttachFileIcon />
						</IconButton>
						<IconButton>
						<MoreVertIcon />
						</IconButton>
				</div>
			</div>

			<div className="chat_area">

				<p className="chat_message">
					<span className="chat_name">Priyanshu</span>
				Hello there
				<span className="chat_timestamp">3:20</span>
				</p>
			</div>

			<div className="chat_footer">
				<IconButton>
				<InsertEmoticonIcon />
				</IconButton>
				<form>
					<input placeholder="Type in a message" value={inputVal} onChange={handleChange} type="text" />
					<SendIcon type="submit" onClick={handleClick} />
				</form>
				<IconButton>
				<MicIcon />
				</IconButton>
			</div>

		</div>
	)
}

export default Chat