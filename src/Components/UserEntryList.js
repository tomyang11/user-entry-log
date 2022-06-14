import React from "react";

import UserEntryItem from "./UserEntryItem";
import './UserEntryList.css';

function EntryUserList(props) {
	let usersList = props.listedUsers.map((user) => (
		<UserEntryItem key={Math.random().toString()}>
			<p>{user.name} ({user.age} years old)</p>
		</UserEntryItem>
	));

	return <ul className='list'>{usersList}</ul>;
}

export default EntryUserList;
