import React from 'react';

import './UserEntryInput.css';

function UserEntryForm() {
    return <form className='form'>
        <label>
            Username
        </label>
        <input type='text' />
        <label>
            Age (Years)
        </label>
        <input type='text' />
    </form>
}

export default UserEntryForm;