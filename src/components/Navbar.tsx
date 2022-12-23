import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='tasks_nav'>
        <div className="nav-box">
            <div onClick={() => navigate('/')} className="nav-item">Tasks</div>
            <div className="nav-logo"><img src='/images/makers_logo.png' alt="error" /></div>
            <div onClick={() => navigate('/meetings')} className="nav-item">Meetings</div>
        </div>
    </nav>
  )
}

export default Navbar