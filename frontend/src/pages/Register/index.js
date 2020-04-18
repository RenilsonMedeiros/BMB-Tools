import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiKey, FiArrowLeft, FiEye } from 'react-icons/fi';

import api from '../../services/api';

export default function Register() {
  const [typeSenha, setTypeSenha] = useState('password');
  const [typeChave, setTypeChave] = useState('password');

  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [admKey, setAdmKey] = useState('');

  const history = useHistory();

  function hidePasswordSenha() {
    if(typeSenha === 'password') setTypeSenha('text');
    else setTypeSenha('password');
  }  
  function hidePasswordChave() {
    if(typeChave === 'password') setTypeChave('text');
    else setTypeChave('password');
  }

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      senha,
      admKey,
    }
    try {
      const response = await api.post('users', data);

      alert(`Seu id e nome de acesso : ${response.data.id} - ${response.data.name}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro! Tente novamente.');
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section>
          <form onSubmit={handleRegister}>
            <p>Cadastre-se</p>


            <div className="inputWithIcon">
              <FiUser /> 
              <input
                placeholder="Nome de usuário"
                value={name}
                onChange={e => setName(e.target.value)}
             />
            </div>
            <div className="inputWithIcon">
              <FiLock /> 
              <input 
                placeholder="Senha" 
                type={typeSenha} 
                value={senha}
                onChange={e => setSenha(e.target.value)}
              /> 
              <span><FiEye onClick={hidePasswordSenha} /></span>
            </div>
            <div className="inputWithIcon">
              <FiKey type="cursor"/> 
              <input 
                placeholder="Chave do adm" 
                type={typeChave} 
                value={admKey}
                onChange={e => setAdmKey(e.target.value)}
              />
              <span><FiEye onClick={hidePasswordChave} /></span>
            </div>

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/">
              <FiArrowLeft /> Já tenho um cadastro
            </Link>
          </form>
        </section>
      </div>
    </div>
  )
}