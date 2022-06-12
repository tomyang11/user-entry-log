import React, { useState } from "react";

import "./UserEntryInput.css";

function UserEntryForm(props) {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	function inputNameHandler(event) {
		setUserName(event.target.value);
	}

	function inputAgeHandler(event) {
		setUserAge(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();

		const entryInfo = {
			name: userName,
			age: userAge,
		};

		if (userAge.trim().length === 0 && userName.trim().length === 0) {
			props.validityCheck('missing input');
			return;
		} else if (userAge < 0) {
			props.validityCheck('negative age');
			return;
		}

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
