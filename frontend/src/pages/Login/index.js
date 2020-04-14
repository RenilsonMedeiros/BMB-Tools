import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

export default function login() {
  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form>
            <p>Bem vindo ao estoque de ferramentas Bumba Meu Baja!</p>

            <div className="inputWithIcon">
              <FiUser aria-hidden="true" /> <input placeholder="Usuário" />
            </div>
            <div className="inputWithIcon">
              <FiLock /> <input placeholder="Senha" type="password" />
            </div>

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="">
              <FiLogIn /> Cadastrar Usuário
            </Link>
          </form>
        </section>
      </div>
    </div>
  )
}