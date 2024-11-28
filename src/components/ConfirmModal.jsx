import React from 'react';

const ConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="confirm_overlay" onClick={onCancel}>
            <div className="confirm_content" onClick={(e) => e.stopPropagation()}>
                <h2>Confirm</h2>
                <p>Change current location?</p>
                <div className='confirm_btn'>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;