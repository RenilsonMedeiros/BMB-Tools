import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiKey, FiArrowLeft, FiEye } from 'react-icons/fi';
import { DiTool } from 'react-icons/di'

export default function Register() {
  const [typeSenha, setTypeSenha] = useState('password');
  const [typeChave, setTypeChave] = useState('password');

  function hidePasswordSenha() {
    if(typeSenha === 'password') setTypeSenha('text');
    else setTypeSenha('password');
  }  
  function hidePasswordChave() {
    if(typeChave === 'password') setTypeChave('text');
    else setTypeChave('password');
  }  

  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form>
            <p>Cadastre-se</p>


            <div className="inputWithIcon">
              <FiUser /> <input placeholder="Nome de usuário" />
            </div>
            <div className="inputWithIcon">
              <FiLock /> <input placeholder="Senha" type={typeSenha} /> 
              <a><FiEye onClick={hidePasswordSenha} /></a>
            </div>
            <div className="inputWithIcon">
              <FiKey type="cursor"/> <input placeholder="Chave do adm" type={typeChave} />
              <a><FiEye onClick={hidePasswordChave} /></a>
            </div>

            <button className="button" type="">Entrar</button>

            <Link className="back-link" to="/">
              <FiArrowLeft /> Já tenho um cadastro
            </Link>
          </form>
        </section>
      </div>
    </div>
  )
}