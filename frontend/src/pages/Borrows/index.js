import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export default function Borrow() {
  return (
    <div className="containerBorrow">
      <header className="header">
        <span className="title">BMB Tools</span> 
        
        <Link className="button" to="/borrow/new">Emprestar</Link>
        <button><FiLogOut /></button>
      </header>


    </div>
  )
}