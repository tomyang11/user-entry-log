import React from 'react';

import './Modal.css';

function Modal(props) {
    let modalContent;
    if (props.validityType === 'missing input') {
        modalContent = "Please enter a valid name and age (non-empty values)";
    } else if (props.validityType === 'negative age') {
        modalContent = "Please enter a valid age (> 0)";
    }

    if (props.validityType === 'normal') {
        return null;
    } else if (props.validityType === 'missing input' || props.validityType === 'negative age') {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        {modalContent}
                    </div>
                    <div className="modal-footer">
                        <button className="button">Close</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal;