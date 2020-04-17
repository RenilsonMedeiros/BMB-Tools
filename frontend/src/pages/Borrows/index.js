import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Borrows() {
  return (
    <div className="borrowContainer">
      <header className="header">
        <span className="title">BMB Tools</span> 
        <img src={logoImg} alt="Bumba Meu Baja" />
        
        <Link className="button" to="/borrow/new">Emprestar</Link>
        <button><FiLogOut /></button>
      </header>

      <div className="content">
        <section>
          <ul>
            <li>
              <strong>Ferramenta</strong>
              <p>Chave da Ferramenta</p>

              <strong>Data</strong>
              <p>08-04-2020</p>

              <strong>Requerente</strong>
              <p>Fulano</p>

              <strong className="idLogin">Emprestado por <i>beltrano</i></strong>

              <button onClick="" type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>

            <li>
              <strong>Ferramenta</strong>
              <p>Chave da Ferramenta</p>

              <strong>Data</strong>
              <p>08-04-2020</p>

              <strong>Requerente</strong>
              <p>Fulano</p>

              <strong className="idLogin">Emprestado por beltrano</strong>

              <button onClick="" type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>

            <li>
              <strong>Ferramenta</strong>
              <p>Chave da Ferramenta</p>

              <strong>Data</strong>
              <p>08-04-2020</p>

              <strong>Requerente</strong>
              <p>Fulano</p>

              <strong className="idLogin">Emprestado por beltrano</strong>

              <button onClick="" type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>

            <li>
              <strong>Ferramenta</strong>
              <p>Chave da Ferramenta</p>

              <strong>Data</strong>
              <p>08-04-2020</p>

              <strong>Requerente</strong>
              <p>Fulano</p>

              <strong className="idLogin">Emprestado por beltrano</strong>

              <button onClick="" type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}