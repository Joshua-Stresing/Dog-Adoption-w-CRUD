import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='Header'>
        
      <NavLink exact to ='/'>
        <h1>Home</h1>
      </NavLink>

      <NavLink exact to ='/dogs/new'>
        <h1>Add A Dog</h1>
      </NavLink>
      
      <NavLink exact to ='/auth'>
        <h1>Sign Out</h1>
      </NavLink>

    </div>
  );
}