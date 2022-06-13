import React, { useState } from "react";
import styles from "./App.module.css";

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

	function closeModal() {
		setValidity('normal');
	}

	return (
		<div className={styles.App}>
			<section className={styles.Form}>
				<UserEntryForm validityCheck={setValidity} onAddUser={addUserHandler} />
			</section>
			<section className={`${styles.Output} ${users.length === 0 && styles.none}`}>
				<UserEntryList listedUsers={users} />
			</section>
			<Modal onClose={closeModal} validityType={validity} />
		</div>
	);
}

export default App;
