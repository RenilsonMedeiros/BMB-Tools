import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn, FiEye } from 'react-icons/fi';

export default function Login() {
  const [type, setType] = useState('password');

  function hidePassword() {
    if(type === 'password') setType('text');
    else setType('password');
  }  

  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form autoComplete="off">
            <p>Bem vindo ao estoque de ferramentas Bumba Meu Baja!</p>

            <div className="inputWithIcon">
              <FiUser aria-hidden="true" /> <input placeholder="Usuário" autoComplete="on" />
            </div>
            <div className="inputWithIcon">
              <FiLock /> <input placeholder="Senha" type={type} id="senha" />
              <a><FiEye onClick={hidePassword} /></a>
            </div>

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
              <FiLogIn /> Cadastrar Usuário
            </Link>
          </form>
        </section>
      </div>
    </div>
  )
}