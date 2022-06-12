import React, { useState } from "react";
import "./App.css";

import UserEntryForm from "./Components/UserEntryInput";
import UserEntryList from "./Components/UserEntryList";
import Modal from "./Components/Modal/Modal";

function App() {
	const [users, setUsers] = useState([]);
	const [validity, setValidity] = useState('normal');

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
				<UserEntryForm validityCheck={setValidity} onAddUser={addUserHandler} />
			</section>
			<section>
				<UserEntryList listedUsers={users} />
			</section>
			<Modal validityType={validity} />
		</div>
	);
}

export default App;
