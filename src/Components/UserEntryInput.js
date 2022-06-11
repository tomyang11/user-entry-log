import React, { useState } from "react";

import "./UserEntryInput.css";

function UserEntryForm(props) {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	function inputNameHandler(event) {
		//console.log(event.target.value);
		setUserName(event.target.value);
	}

	function inputAgeHandler(event) {
		//console.log(event.target.value);
		setUserAge(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();

		const entryInfo = {
			name: userName,
			age: userAge,
		};

		props.onAddUser(entryInfo);
		console.log(entryInfo);

		setUserName("");
		setUserAge("");
	}

	return (
		<form onSubmit={submitHandler}>
			<label>Username</label>
			<input type="text" value={userName} onChange={inputNameHandler} />
			<label>Age (Years)</label>
			<input type="text" value={userAge} onChange={inputAgeHandler} />
			<button type="submit">Add User</button>
		</form>
	);
}

export default UserEntryForm;
