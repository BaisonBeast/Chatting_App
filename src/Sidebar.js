import React, {useState, useEffect} from 'react'
import "./css/Sidebar.css"
import SidebarChat from "./SidebarChat"
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import db from "./firebase";
import {useStateValue} from "./StateProvider";

function Sidebar() {

/* Array for storing the local data */
	const [rooms, setRooms] = useState([]);
	const [{user}, dispatch] = useStateValue();

/* onSnapshot is for taking the data everytime we add or delete and updates the room*/
	useEffect(() => {
			db.collection('rooms').onSnapshot((snapshot)=>
				setRooms(
					snapshot.docs.map(doc=>({
					id: doc.id,
					data: doc.data(),
				}))
			  )
			);

	}, []);

/* Render all the chatSidebar */
	function renderItems(room){
		return <SidebarChat
					id={room.id}
					key={room.id}
					name={room.data.name}
				/>
	}
/* Creating a new chatSidebar  */
  function createChat(){
		const roomName=prompt("Enter the name ")
		if(roomName)
		{
			db.collection("rooms").add({
				name: roomName
			})
		}
	}

	return (
		<div className="sidebar">

			<div className="sidebar_header">
				 {/* IconButton for clickable effect */}
				<IconButton>
				{/* Material ui components Avatar, DonutLargeIcon, ChatIcon, MoreVertIcon */}
				<Avatar src={user?.photoURL}/>
				</IconButton>
				<div className="sidebar_header_right">
					<IconButton>
    				<DonutLargeIcon />
    			</IconButton>
  				<IconButton  onClick={createChat}>
  					<ChatIcon />
					</IconButton>
					<IconButton>
					  <MoreVertIcon />
					</IconButton>
			</div>
				</div>


			<div className="sidebar_search">
				<div className="sidebar_search_container">
					<SearchIcon />
				<input type="text" placeholder="Search" />
				</div>
			</div>

{/* Map through all the sidebar_chats */}
			<div className="sidebar_chats">
				<SidebarChat addNewChat/>
				{rooms.map(renderItems)}
			</div>
		</div>
	)
}

export default Sidebar
