import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn, FiEye } from 'react-icons/fi';
import api from '../../services/api';

export default function Login() {
  const [type, setType] = useState('password');

  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  function hidePassword() {
    if(type === 'password') setType('text');
    else setType('password');
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { name, senha });

      localStorage.setItem('userId', response.data.id)
      localStorage.setItem('userName', name);

      history.push('/borrows');
    } catch (err) {
      alert('Falha ao executar o login! Tente novamente.')
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form autoComplete="off" onSubmit={handleLogin}>
            <p>Bem vindo aos empréstimos de ferramentas Bumba Meu Baja!</p>

            <div className="inputWithIcon">
              <FiUser aria-hidden="true" /> 
              <input 
                placeholder="Usuário" 
                autoComplete="on" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="inputWithIcon">
              <FiLock /> 
              <input 
                placeholder="Senha" 
                type={type}  
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <span><FiEye onClick={hidePassword} /></span>
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