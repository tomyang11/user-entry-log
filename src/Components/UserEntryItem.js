import React from 'react';

import './UserEntryItem.css';

function UserEntryItem(props) {
    return <li className='item'>
        {props.children}
    </li>
}

export default UserEntryItem;