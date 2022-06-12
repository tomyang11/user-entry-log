import React from "react";

import UserEntryItem from "./UserEntryItem";

function EntryUserList(props) {
	let usersList = props.listedUsers.map((user) => (
		<UserEntryItem key={Math.random().toString()}>
			{user.name}
			{user.age}
		</UserEntryItem>
	));

	return <ul>{usersList}</ul>;
}

export default EntryUserList;
