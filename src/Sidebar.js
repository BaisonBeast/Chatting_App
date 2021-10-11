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
	const [Name, setName]= useState("");

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

/* Creating a new chatSidebar  */
  function createChat(){
		const roomName=prompt("Enter the name ")
		if(roomName)
		{
			db.collection("rooms").add({
				name: roomName
			})
		}
		//console.log(user);
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

			{/*Input field for the search*/}
			<div className="sidebar_search">
				<div className="sidebar_search_container">
					<SearchIcon />
				<input type="text" placeholder="Search" onChange={event=> setName(event.target.value)} />
				</div>
			</div>

{/* Map through all the sidebar_chats and display according to filter */}
			<div className="sidebar_chats">
				<SidebarChat addNewChat/>
				{rooms.filter((val)=>{
					if(Name===""){
					return val
				}else if(val.data.name.toLocaleLowerCase().includes(Name.toLowerCase())){
						return val
					}
					else return null;
				}).map((room)=>{
					return <SidebarChat
								id={room.id}
								key={room.id}
								name={room.data.name}
							/>
				})}
			</div>
		</div>
	)
}

export default Sidebar
