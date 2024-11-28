import React from 'react'

const ErrorModal = ({massage, onClose}) => {
  return (
    <div className='confirm_overlay'>
      <div className='confirm_content'>
        <h2>Error</h2>
        <p>{massage || 'City is not found'}</p>
        <div className='confirm_btn'>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal