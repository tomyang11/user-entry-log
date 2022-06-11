import React, { useState } from "react";
import "./App.css";

import UserEntryForm from "./Components/UserEntryInput";
import UserEntryList from "./Components/UserEntryList";

function App() {
	const [users, setUsers] = useState([]);

	function addUserHandler(enteredUser) {
		setUsers((prevUsers) => {
			let updatedUsers = [...prevUsers];
			updatedUsers.unshift(enteredUser);
			return updatedUsers;
		});
	}

	return (
		<div className='App'>
			<section>
				<UserEntryForm onAddUser={addUserHandler} />
			</section>
			<section>
				<UserEntryList listedUsers={users} />
			</section>
		</div>
	);
}

export default App;
