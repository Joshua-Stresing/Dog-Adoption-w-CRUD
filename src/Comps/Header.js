import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/auth';

export default function Header({ currentUser, setCurrentUser }) {

  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

  return (
    <div className='Header'>
        
      <NavLink exact to ='/'>
        <h1>Home</h1>
      </NavLink>

      
      {currentUser &&
      <>
        <NavLink exact to ='/dogs/new'>
          <h1>Add A Dog</h1>
        </NavLink>
       
        <button onClick={handleLogout}>Sign Out</button>        
      </>
      }

      {!currentUser &&
      <>
        <NavLink exact to ='/auth'>
          <h1>Sign In</h1>
        </NavLink>
      </>
      }

    </div>
  );
}