import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Borrows() {
  const [borrow, setBorrow] = useState([]);

  const history = useHistory();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    api.get('tools', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setBorrow(response.data);
    })
  }, [userId]);

  async function handleDeleteBorrow(id) {
    try {
      await api.delete(`tools/${id}`, {
        headers: { 
          Authorization: userId,
        }
      });

      setBorrow(borrow.filter(borrow => borrow.id !== id))
    } catch (err) {
      alert('Erro ao deletar empréstimo, tente novamente!');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="borrowContainer">
      <header className="header">
        <span className="title">BMB Tools</span> 
        <img src={logoImg} alt="Bumba Meu Baja" />
        
        <Link className="button" to="/borrow/new">Emprestar</Link>
        <button onClick={handleLogout} type="submit"><FiLogOut /></button>
      </header>

      <div className="content">
        <section className="list">
          <ul>
            {borrow.map(borrow => (
              <li key={borrow.id}>
                <strong>Ferramenta</strong>
                <p>{borrow.toolName}: {borrow.description}</p>

                <strong>Data</strong>
                <p>{borrow.date}</p>

                <strong>Requerente</strong>
                <p>{borrow.requester}</p>

                <strong className="idLogin">Emprestado por <i>{borrow.name}</i></strong>

                <button type="button" onClick={() => handleDeleteBorrow(borrow.id)}>
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}